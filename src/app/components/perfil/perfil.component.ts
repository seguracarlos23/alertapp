import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from 'src/app/interfaces/users';
import { session } from 'src/app/services/session';
import { storage } from 'src/app/services/storage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  user: users;
  entries
  formperfil: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.formperfil = this.formBuilder.group({
      identification: [''],
      password: [''],
      name: ['', [Validators.required]],
      phone: [''],
      cellphone: [''],
      address: [''],
      email: ['', [Validators.email, Validators.required]]
    });
  }

   async ngOnInit(): Promise<users> {
    if (!session.getSesion())
      this.router.navigate(['login']);
    this.user = await storage.getDataUser(session.getUserSesion());
    this.entries = Object.entries(this.user)
    this.entries = this.entries.filter(([key]) => key !== 'password');
    this.formperfil.controls['identification'].setValue(this.user.identification);
    this.formperfil.controls['name'].setValue(this.user.name);
    this.formperfil.controls['password'].setValue(this.user.password);
    this.formperfil.controls['phone'].setValue(this.user.phone[0]);
    this.formperfil.controls['cellphone'].setValue(this.user.phone[1]);
    this.formperfil.controls['address'].setValue(this.user.address);
    this.formperfil.controls['email'].setValue(this.user.email[0]);
    return;
  }
  validateData() {
    let dataUser: users = {
      identification: this.formperfil.controls['identification'].value,
      name: `${this.formperfil.controls['name'].value} `,
      phone: [this.formperfil.controls['phone'].value, this.formperfil.controls['cellphone'].value],
      email: [this.formperfil.controls['email'].value],
      password: this.formperfil.controls['password'].value,
      address: this.formperfil.controls['address'].value
    }
    storage.editUser(dataUser);
    Swal.fire(
      'Exito',
      'Datos guardados exitosamente',
      'success'
    );
    this.router.navigate(['perfil']);
  }

}

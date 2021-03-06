import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from 'src/app/interfaces/users';
import { session } from 'src/app/services/session';
import { storage } from 'src/app/services/storage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})

export class RegistrosComponent implements OnInit {
  formregistro: FormGroup;
  dataStorage: storage;
  existsUser: boolean;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.formregistro = this.formBuilder.group({
      identification: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      repassword: ['', [Validators.required]],
      surname: [''],
      phone: [''],
      cellphone: [''],
      address: [''],
      email: ['', [Validators.email, Validators.required]]
    });

  }

  async validateUserExists() {
     this.existsUser = await storage.getDataUser(this.formregistro.controls['identification'].value.trim()) ? true : false;
     return await storage.getDataUser(this.formregistro.controls['identification'].value.trim());
  }
  validateData() {
    let newUser: users = {
      identification: this.formregistro.controls['identification'].value,
      name: `${this.formregistro.controls['name'].value} ${this.formregistro.controls['surname'].value}`,
      phone: [this.formregistro.controls['phone'].value, this.formregistro.controls['cellphone'].value],
      email: [this.formregistro.controls['email'].value],
      password: this.formregistro.controls['password'].value,
      address: this.formregistro.controls['address'].value
    }
    storage.createUser(newUser);
    Swal.fire(
      'Exito',
      'Registro exitoso, inicie sesion',
      'success'
    );
    this.formregistro.reset();
  }

  ngOnInit(): void {
  }

}

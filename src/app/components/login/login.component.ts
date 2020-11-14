import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { storage } from "../../services/storage";
import Swal from 'sweetalert2'
import { RouterModule, Routes, Router } from '@angular/router';

import { users } from 'src/app/interfaces/users';
import { session } from 'src/app/services/session';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formlogin: FormGroup;
  dataStorage: storage;
  existsUser: boolean;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.formlogin = this.formBuilder.group({
      identification: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.dataStorage = new storage();

  }

  validateUserExists() {
    this.existsUser = this.dataStorage.validateUserExists(+this.formlogin.controls['identification'].value.trim()) ? true : false;
    return this.dataStorage.validateUserExists(+this.formlogin.controls['identification'].value.trim());
  }
  validateCredentials() {
    let { password } = this.validateUserExists() ?? {};
    if (password !== this.formlogin.controls['password'].value.trim())
      Swal.fire(
        'Error',
        'Valida que esta clave sea la de tu identificacion',
        'error'
      );
    else {
      session.setSesion()
      this.router.navigate(['']);
      window.location.reload();
    }
  }

  ngOnInit(): void {
    if (session.getSesion())
      this.router.navigate(['']);
  }

}

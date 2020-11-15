import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/interfaces/users';
import { session } from 'src/app/services/session';
import { storage } from 'src/app/services/storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  user: users;
  entries

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!session.getSesion())
      this.router.navigate(['login']);
    this.user = storage.getDataUser(session.getUserSesion());
    console.log(this.user);
    this.entries = Object.entries(this.user)
  }


}

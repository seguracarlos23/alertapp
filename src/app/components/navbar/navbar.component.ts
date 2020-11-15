import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { session } from 'src/app/services/session';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  logout() {
    session.logout();
    this.router.navigate(['login']);
  }

}

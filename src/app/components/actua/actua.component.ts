import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { session } from 'src/app/services/session';

@Component({
  selector: 'app-actua',
  templateUrl: './actua.component.html',
  styleUrls: ['./actua.component.scss']
})
export class ActuaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!session.getSesion())
      this.router.navigate(['login']);
  }

}

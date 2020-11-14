import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { session } from 'src/app/services/session';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.scss']
})
export class TiposComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!session.getSesion())
      this.router.navigate(['login']);
  }

}

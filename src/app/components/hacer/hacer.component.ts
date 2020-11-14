import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { session } from 'src/app/services/session';

@Component({
  selector: 'app-hacer',
  templateUrl: './hacer.component.html',
  styleUrls: ['./hacer.component.scss']
})
export class HacerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!session.getSesion())
      this.router.navigate(['login']);
  }

}

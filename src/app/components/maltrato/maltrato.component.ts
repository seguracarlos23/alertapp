import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { session } from 'src/app/services/session';

@Component({
  selector: 'app-maltrato',
  templateUrl: './maltrato.component.html',
  styleUrls: ['./maltrato.component.scss']
})
export class MaltratoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!session.getSesion())
      this.router.navigate(['login']);
  }

}

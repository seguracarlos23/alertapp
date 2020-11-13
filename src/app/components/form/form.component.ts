import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formreactivo: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  @Input() form: String
  ngOnInit(): void {
    this.formreactivo = this.formBuilder.group({
      identification: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', , Validators.required]
    });
  }
  register() {
    if (this.formreactivo.invalid) {
      return;
    }
    console.log(this.formreactivo.value);

  }

}

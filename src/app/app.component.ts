import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alertapp';
  formreactivo: FormGroup;
  public searching: boolean;
  public data: any = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.formreactivo = this.formBuilder.group({
      identification: ['', [Validators.required]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  register() {
    if (this.formreactivo.invalid) {
      return;
    }
    this.formreactivo.reset();
  }

  validate() {
    this.http.get("/assets/user.json").subscribe(data => {
      this.data = data;
      this.searching = this.validateField();
    }, error => {
      console.log(error);
    })
    return this.searching;
  }
  validateField() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].identification === this.formreactivo.controls['identification'].value.trim()) {
        return false;
      }
    }
    return true;
  }
}

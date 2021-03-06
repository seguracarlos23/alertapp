import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TiposComponent } from './components/tipos/tipos.component';
import { ActuaComponent } from './components/actua/actua.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MaltratoComponent } from './components/maltrato/maltrato.component';
import { HacerComponent } from './components/hacer/hacer.component';
import { AcordionComponent } from './components/acordion/acordion.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { FormComponent } from './components/form/form.component';
import { ButtonComponent } from './components/button/button.component';
import { ErrorComponent } from './components/error/error.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TiposComponent,
    ActuaComponent,
    MapaComponent,
    MaltratoComponent,
    HacerComponent,
    AcordionComponent,
    RegistrosComponent,
    FormComponent,
    ButtonComponent,
    ErrorComponent,
    InputComponent,
    PerfilComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

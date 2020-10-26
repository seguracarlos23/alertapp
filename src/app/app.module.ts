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
    AcordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

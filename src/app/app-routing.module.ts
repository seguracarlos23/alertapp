import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActuaComponent } from './components/actua/actua.component';
import { HacerComponent } from './components/hacer/hacer.component';
import { MaltratoComponent } from './components/maltrato/maltrato.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { TiposComponent } from './components/tipos/tipos.component';

const routes: Routes = [
  { path: '', component: MaltratoComponent },
  { path: 'tipos-maltrato', component: TiposComponent },
  { path: 'actua', component: ActuaComponent },
  { path: 'mapa', component: HacerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

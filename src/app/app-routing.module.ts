import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ActuaComponent } from './components/actua/actua.component';
import { HacerComponent } from './components/hacer/hacer.component';
import { LoginComponent } from './components/login/login.component';
import { MaltratoComponent } from './components/maltrato/maltrato.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { TiposComponent } from './components/tipos/tipos.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { PerfilComponent } from './components/perfil/perfil.component';
const routes: Routes = [
  { path: '', component: MaltratoComponent },
  { path: 'tipos-maltrato', component: TiposComponent },
  { path: 'actua', component: ActuaComponent },
  { path: 'mapa', component: HacerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'registro', component: RegistrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private router: Router) { }
}

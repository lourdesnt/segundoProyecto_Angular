import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanalesComponent } from './vistas2/canales/canales.component' ;
import { AcercaDeNosotrosComponent } from './vistas2/acerca-de-nosotros/acerca-de-nosotros.component' ;
import { PaginaNoEncontradaComponent } from './vistas2/pagina-no-encontrada/pagina-no-encontrada.component' ;
import { LoginComponent } from './vistas2/login/login.component';
import { BuscarComponent } from './vistas2/buscar/buscar.component';

const routes: Routes = [
  { path: 'canales', component: CanalesComponent },
  { path: 'about', component: AcercaDeNosotrosComponent },
  { path: 'buscar', component: BuscarComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/canales', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent }
  ];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

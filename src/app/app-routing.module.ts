import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanalesComponent } from './vistas2/canales/canales.component' ;
import { AcercaDeNosotrosComponent } from './vistas2/acerca-de-nosotros/acerca-de-nosotros.component' ;
import { PaginaNoEncontradaComponent } from './vistas2/pagina-no-encontrada/pagina-no-encontrada.component' ;

const routes: Routes = [
  { path: 'canales', component: CanalesComponent },
  { path: 'about', component: AcercaDeNosotrosComponent },
  { path: '', redirectTo: '/canales', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent }
  ];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

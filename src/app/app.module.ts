import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CanalesComponent } from './vistas2/canales/canales.component';
import { CanalComponent } from './vistas2/canales/canal/canal.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './vistas2/pagina-no-encontrada/pagina-no-encontrada.component';
import { AcercaDeNosotrosComponent } from './vistas2/acerca-de-nosotros/acerca-de-nosotros.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './vistas2/login/login.component';
import { BuscarComponent } from './vistas2/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    CanalesComponent,
    CanalComponent,
    PaginaNoEncontradaComponent,
    AcercaDeNosotrosComponent,
    LoginComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SaludoComponent } from './saludo/saludo.component';
import { AppRoutingModule } from './app.routes';
import { IdeasComponent } from './ideas/ideas.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SaludoComponent,
    IdeasComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SaludoComponent } from './saludo/saludo.component';
import { AppRoutingModule } from './app.routes';
import { IdeasComponent } from './ideas/ideas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CreateideaComponent } from './createidea/createidea.component';
import { InvitarComponent } from './invitar/invitar.component';
import { WikiComponent } from './wiki/wiki.component';
import { BaulComponent } from './baul/baul.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SaludoComponent,
    IdeasComponent,
    PerfilComponent,
    NoticiasComponent,
    CreateideaComponent,
    InvitarComponent,
    WikiComponent,
    BaulComponent,
    AjustesComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




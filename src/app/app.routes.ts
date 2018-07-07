import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { SaludoComponent } from './saludo/saludo.component';
import { InicioComponent } from './inicio/inicio.component';
import { IdeasComponent } from './ideas/ideas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { InvitarComponent } from './invitar/invitar.component';
import { WikiComponent } from './wiki/wiki.component';
import { CreateideaComponent } from './createidea/createidea.component';
import { BaulComponent } from './baul/baul.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';









const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'saludo', component: SaludoComponent },
    { path: 'ideas', component: IdeasComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'invitar', component: InvitarComponent },
    { path: 'wiki', component: WikiComponent },
    { path: 'createidea', component: CreateideaComponent },
    { path: 'baul', component: BaulComponent },
    { path: 'ajustes', component: AjustesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent }








    // inicio, ideas, perfil, noticias, invitar, wiki, crear idea, baúl de ideas, ajustes, login, registro,

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
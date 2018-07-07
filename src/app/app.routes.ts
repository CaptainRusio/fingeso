import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { SaludoComponent } from './saludo/saludo.component';
import { InicioComponent } from './inicio/inicio.component';
import { IdeasComponent } from './ideas/ideas.component';
import { PerfilComponent } from './perfil/perfil.component';



const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'saludo', component: SaludoComponent },
    { path: 'ideas', component: IdeasComponent },
    { path: 'perfil', component: PerfilComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
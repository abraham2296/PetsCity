import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ConsejosComponent } from './pages/consejos/consejos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { SolicitarComponent } from './pages/solicitar/solicitar.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/consejos/consejo.module').then(m => m.ConsejoModule)
  },
  {
    path: 'servicio',
    loadChildren: () => import('./pages/servicios/servicio.module').then(m => m.ServicioModule)
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'consejos',
    component: ConsejosComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'solicitar',
    component: SolicitarComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  },
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class CityRoutingModule { }

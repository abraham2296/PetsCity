import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntradaComponent } from './shared/entrada.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'city',
    loadChildren: () => import('./city/city.module').then( m => m.CityModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

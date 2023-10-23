import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdopcionComponent } from './pages/adopcion/adopcion.component';
import { AlimentosComponent } from './pages/alimentos/alimentos.component';
import { CuidadoComponent } from './pages/cuidado/cuidado.component';
import { PrevencionComponent } from './pages/prevencion/prevencion.component';
import { RoedoresComponent } from './pages/roedores/roedores.component';
import { ViajesComponent } from './pages/viajes/viajes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'adopcion',
        component: AdopcionComponent,
      },
      {
        path: 'alimentos',
        component: AlimentosComponent,
      },
      {
        path: 'cuidado',
        component: CuidadoComponent,
      },
      {
        path: 'prevencion',
        component: PrevencionComponent,
      },
      {
        path: 'roedores',
        component: RoedoresComponent,
      },
      {
        path: 'viajes',
        component: ViajesComponent,
      },
      {
        path: '**',
        redirectTo: 'consejos'
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ConsejoRoutingModule { }

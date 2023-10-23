import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CirugiaComponent } from './pages/cirugia/cirugia.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { FarmaciaComponent } from './pages/farmacia/farmacia.component';
import { LaboratorioComponent } from './pages/laboratorio/laboratorio.component';
import { PeluqueriaComponent } from './pages/peluqueria/peluqueria.component';
import { RadiografiaComponent } from './pages/radiografia/radiografia.component';
import { VacunacionComponent } from './pages/vacunacion/vacunacion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cirugia',
        component: CirugiaComponent
      },
      {
        path: 'consulta',
        component: ConsultaComponent
      },
      {
        path: 'farmacia',
        component: FarmaciaComponent
      },
      {
        path: 'laboratorio',
        component: LaboratorioComponent
      },
      {
        path: 'peluqueria',
        component: PeluqueriaComponent
      },
      {
        path: 'radiografia',
        component: RadiografiaComponent
      },
      {
        path: 'vacunacion',
        component: VacunacionComponent
      },
      {
        path: '**',
        redirectTo: 'Servicios'
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ServicioRoutingModule { }

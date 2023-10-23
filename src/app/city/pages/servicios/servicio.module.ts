import { NgModule } from '@angular/core';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { CirugiaComponent } from './pages/cirugia/cirugia.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { FarmaciaComponent } from './pages/farmacia/farmacia.component';
import { LaboratorioComponent } from './pages/laboratorio/laboratorio.component';
import { PeluqueriaComponent } from './pages/peluqueria/peluqueria.component';
import { RadiografiaComponent } from './pages/radiografia/radiografia.component';
import { VacunacionComponent } from './pages/vacunacion/vacunacion.component';




@NgModule({
  declarations: [
    CirugiaComponent,
    ConsultaComponent,
    FarmaciaComponent,
    LaboratorioComponent,
    PeluqueriaComponent,
    RadiografiaComponent,
    VacunacionComponent
  ],
  imports: [
    ServicioRoutingModule,
    ComponentsModule
  ]
})
export class ServicioModule { }

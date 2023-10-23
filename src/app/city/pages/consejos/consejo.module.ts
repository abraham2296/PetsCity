import { NgModule } from '@angular/core';

import { ConsejoRoutingModule } from './consejo-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { AdopcionComponent } from './pages/adopcion/adopcion.component';
import { AlimentosComponent } from './pages/alimentos/alimentos.component';
import { CuidadoComponent } from './pages/cuidado/cuidado.component';
import { PrevencionComponent } from './pages/prevencion/prevencion.component';
import { RoedoresComponent } from './pages/roedores/roedores.component';
import { ViajesComponent } from './pages/viajes/viajes.component';



@NgModule({
  declarations: [
    AdopcionComponent,
    AlimentosComponent,
    CuidadoComponent,
    PrevencionComponent,
    RoedoresComponent,
    ViajesComponent
  ],
  imports: [
    ConsejoRoutingModule,
    ComponentsModule
  ]
})
export class ConsejoModule { }

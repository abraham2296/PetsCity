import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityRoutingModule } from '../city-routing.module';

import { FooterComponent } from './footer/footer.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { PuntosComponent } from './puntos/puntos.component';
import { LineaComponent } from './linea/linea.component';







@NgModule({
  declarations: [
    FooterComponent,
    NabvarComponent,
    PuntosComponent,
    LineaComponent,
  ],
  exports: [
    FooterComponent,
    NabvarComponent,
    PuntosComponent,
    LineaComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule
    
  ]
})
export class ComponentsModule { }

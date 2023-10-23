import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityRoutingModule } from './city-routing.module';

import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { ConsejosComponent } from './pages/consejos/consejos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { SolicitarComponent } from './pages/solicitar/solicitar.component';
import { ComponentsModule } from './components/components.module';




@NgModule({
  declarations: [
    InicioComponent,
    AboutComponent,
    ConsejosComponent,
    ServiciosComponent,
    SolicitarComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule,
    ComponentsModule,
    
  ]
})
export class CityModule { }

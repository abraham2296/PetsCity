import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './city/components/components.module';

import { AppComponent } from './app.component';
import { EntradaComponent } from './shared/entrada.component';


@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  constructor(private router: Router){

  }

  goTo2(ruta2: string){
    this.router.navigate(['/city/servicio',ruta2])
  }
}

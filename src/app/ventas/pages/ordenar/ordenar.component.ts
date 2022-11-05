import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})


export class OrdenarComponent {

  nosotros: string = "nosotros";

  enMayusculas : boolean = false;

  ordernarPor: string = '';

  heroes : Heroe [] =  [
    {
      nombre : 'Superman',
      vuela : true,
      color : Color.azul
    },
    {
      nombre : 'Batman',
      vuela : false,
      color : Color.negro
    },
    {
      nombre : 'Robin',
      vuela : false,
      color : Color.verde
    },
    {
      nombre : 'Daredevil',
      vuela : false,
      color : Color.rojo
    },
    {
      nombre : 'Linterna Verde',
      vuela : true,
      color : Color.verde
    }

  ]
  
  toggleMayusculas() {

    console.log('Es Mayúsculas?' +  this.enMayusculas);
     this.enMayusculas = !this.enMayusculas
        
    
    return ( this.enMayusculas ) ? this.nosotros.toUpperCase() : this.nosotros.toLowerCase();  
    
  }

  cambiarOrden( valor : string){
      this.ordernarPor = valor

      
  }

}

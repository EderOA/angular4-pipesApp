import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Fernando";
  genero: string = "masculino";


  invitacionMapa ={
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  //in18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Fernando', 'Eder'];

  clientesMapa = {
      '=0': 'no tenemos ningún cliente esperando',
      '=1': 'tenemos 1 cliente esperando',
      '=2': 'tenemos 2 clientes esperando',
      'other' : 'tenemos # clientes esperando'
  }

  cambiarGenero(){
    if (this.nombre == 'Fernando'){
      this.nombre = "Susana";
      this.genero = "femenino";
    }
    else{
      this.nombre = "Fernando";
      this.genero = "masculino";
    }
  }
  
  borrarCliente(){
      this.clientes.pop();
  }

  //KeyValuePipe

  persona = {
    nombre: 'Eder',
    edad: 40,
    direccion: 'Mexico, México'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]


  //Async Pipe

  miObservable = interval(1000);   //0, 1, 2, 3 

  valorPromesa = new Promise( (resolve, reject)  => {
      setTimeout (() =>{
        resolve ('Tenemos data de promesa');
      }, 3500)
  })


}

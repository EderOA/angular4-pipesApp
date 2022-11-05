import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{
    nombreLower : string = "eder";
    nombreUpper : string = "EDER";
    nombreCompleto : string = "eDeR orTiz";

    fecha : Date = new Date(); // El día de hoy
}

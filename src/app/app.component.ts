import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private primengConfig: PrimeNGConfig) {}
  title = 'pipesApp';


  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}

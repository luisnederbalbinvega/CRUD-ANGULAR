import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo1RoutingModule } from './modulo1-routing.module';
import { Componente01Component } from './componente01/componente01.component';
import { Componente02Component } from './componente02/componente02.component';


@NgModule({
  declarations: [
    Componente01Component,
    Componente02Component
  ],
  imports: [
    CommonModule,
    Modulo1RoutingModule
  ]
})
export class Modulo1Module { }

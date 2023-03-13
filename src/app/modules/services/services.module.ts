import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente01Component } from './componente01/componente01/componente01.component';
import { Componente02Component } from './componente02/componente02/componente02.component';



@NgModule({
  declarations: [
    Componente01Component,
    Componente02Component
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }

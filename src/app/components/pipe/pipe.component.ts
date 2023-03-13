import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  paises:string[]=[
    'Peru',
    'Colombia',
    'Chile',
    'Bolivia'
  ];
  numeros=[1,2,3,4,5,6,7];



}

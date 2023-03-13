import { Pipe, PipeTransform } from '@angular/core';
import { ValueFromArray } from 'rxjs';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value:number[], args: string): string[] {
    let numerosEnLetras:string[]=[];
    /*let paisesFiltrado:string[]=['Uruguay'];
    for(let i=0;i<value.length;i++){
      if(value[i].indexOf('Peru')>-1){
        //paisesFiltrado=[...paisesFiltrado,value[i]];
        paisesFiltrado.push(value[i]);
      }
    }
    return paisesFiltrado;*/
     for(let i=0;i<value.length;i++){
      switch(value[i]) {
        case 1:
          // code block
        numerosEnLetras=[...numerosEnLetras,"uno"];
        console.log("uno");
          break;
        case 2:
          numerosEnLetras=[...numerosEnLetras,"dos"]
          break;
          case 3:
            // code block
          numerosEnLetras=[...numerosEnLetras,"tres"]
            break;
          case 4:
            numerosEnLetras=[...numerosEnLetras,"cuatro"]
            break
            case 5:
          // code block
        numerosEnLetras=[...numerosEnLetras,"cinco"]
          break;
        case 6:
          numerosEnLetras=[...numerosEnLetras,"seis"]
          break
          case 7:
          // code block
        numerosEnLetras=[...numerosEnLetras,"siete"]
          break;
          
        default:
          // code block
      }


     }
    return numerosEnLetras;
  }

}

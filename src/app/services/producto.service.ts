import { Injectable } from '@angular/core';
import {Producto} from '../model/Producto';
 
import { Observable } from 'rxjs';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  p:Producto[]=[];
  productos:Producto[]=[
    {
      nombre:'televisor',
      precio:220
    },
    {
      nombre:'computadora',
      precio:1500
    }
  ];
  pros=[];

  constructor() { 
    //this.copiarproductos(this.productos);
  }


   getProducts():Observable<Producto[]> {
    
    //return this.productos;      
    return of(this.productos);  
  }
  addProduct(producto:Producto) {
    this.productos.push(producto); 
   }
   deleteProduct(id:any){
    this.productos= this.productos.filter((p,index)=>{
      console.log(index);
      return (index+1)!=id;
    });
   }

   copiarproductos(productos:any){
    this.pros=productos;
   }
   actualizarProducto(producto:any,id:any){
    this.productos[id]=producto;
   }

}

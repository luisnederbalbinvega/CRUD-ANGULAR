import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  formulario!:FormGroup;

  constructor(private productoService:ProductoService,private formBuilder:FormBuilder, private route:ActivatedRoute,private router:Router){
    this.createForm();
  }


  ngOnInit(){

  }

  createForm(){
   this.formulario=this.formBuilder.group({
    nombre:['',Validators.required],
    precio:['',Validators.required]
   });

  }

  procesarFormulario(){
       
    this.productoService.addProduct(this.formulario.value);
    //console.log(this.productoService.productos);
    this.router.navigate(['']);
    //console.log(this.productoService.productos);
    //this.productoService.copiarproductos(this.productoService.productos);
    //console.log(this.productoService.productos);
    //this.router.navigate(['']);
  }




}

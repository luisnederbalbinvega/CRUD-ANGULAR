import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Producto } from 'src/app/model/Producto';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  formulario!:FormGroup;
  producto!:Producto;
  id!:number;
  constructor(private productoService:ProductoService,private formBuilder:FormBuilder, private route:ActivatedRoute,private router:Router){
    this.createForm();
  }


  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      //let id=parseInt(params['id']);
       this.id=params['id']-1;
      //console.log(params);
      //console.log("producto"+this.id);
      //console.log(this.productoService.productos[this.id]);
      let producto=this.productoService.productos[this.id];
      this.formulario.patchValue(producto);  
      });

  }

  createForm(){
   this.formulario=this.formBuilder.group({
    nombre:['',Validators.required],
    precio:['',Validators.required]
   });

  }

  procesarFormulario(){
    console.log(this.formulario.value);
    console.log("Procesando Formulario");
    console.log(this.productoService.productos[this.id]);
    //this.productoService.productos[this.id]=this.formulario.value;
    this.productoService.actualizarProducto(this.formulario.value,this.id);
    console.log(this.productoService.productos[this.id]);
    //console.log("Id:"+this.id);
    this.router.navigate(['']);
  }


}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  productos:any;
  filtrados:any;
  constructor(private productoService:ProductoService){
    console.log("constructor Lista");
   
  }
  ngOnInit(){
     // this.productos= this.productoService.getProducts;
    // this.productos= this.productoService.getProducts();
    this.conseguirProductos();
   
  }

  deleteProducto(id:any){
    //console.log("eliminando producto");
    //console.log(id);
    
    //this.filtrados=this.productoService.deleteProduct(id);
    //console.log("eliminando producto");
    //Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.deleteProduct(id);
        this.conseguirProductos();

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })






    //this.productoService.deleteProduct(id);
    //this.conseguirProductos();
     
  }
  conseguirProductos(){
    this.productoService.getProducts().subscribe((data)=>{
      this.productos=data;
      
      console.log(data);
    });
  }

  deleteProduct(id:any){
    /*return this.productos.filter((p:any,index:any)=>{
      console.log(index);
      return (index+1)!=id;
    });*/
    console.log("productos");
    console.log("===============================");
    console.log(this.productoService.productos);
    console.log("===============================");
   }

}

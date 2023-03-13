import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './components/pipe/pipe.component';
import { UsersComponent } from './components/users/users.component';
import { AgregarComponent } from './productos/agregar/agregar.component';
import { EditarComponent } from './productos/editar/editar.component';
import { ListarComponent } from './productos/listar/listar.component';

const routes: Routes = [
  {
    path:'inicio',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:()=>import('./modules/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'about',
    loadChildren:()=>import('./modules/about/about.module').then(m=>m.AboutModule)
  },
  {
    path:'contact',
    loadChildren:()=>import('./modules/contact/contact.module').then(m=>m.ContactModule)
  },
  {
    path:'services',
    loadChildren:()=>import('./modules/services/services.module').then(m=>m.ServicesModule)
  },
  {
    path:'modulo1',
    loadChildren:()=>import('./modules/modulo1/modulo1.module').then(m=>m.Modulo1Module)
  },
  {
    path:'',component:ListarComponent
  },
  {
    path:'agregar',
    component:AgregarComponent
  },
  {
    path:'editar/:id',
    component:EditarComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'pipe',
    component:PipeComponent
  }


  /*{path:'',component:ListarComponent},
  {path:'agregar',component:AgregarComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

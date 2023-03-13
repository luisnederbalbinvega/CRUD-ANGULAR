import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './productos/listar/listar.component';
import { AgregarComponent } from './productos/agregar/agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './productos/editar/editar.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http'; 
import { UserService } from './interceptor/user.service';
import { FiltroPipe } from './pipes/filtro.pipe';
import { PipeComponent } from './components/pipe/pipe.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    UsersComponent,
    FiltroPipe,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
 
  ],
  providers: [
     {
      provide:HTTP_INTERCEPTORS,
      useClass:UserService,
      multi:true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

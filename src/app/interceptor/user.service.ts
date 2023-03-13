import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("Interceptando las peticionesddddd");
   /*let clone= req.clone({
    params:req.params.appendAll({
      'pais':'peru',
      'ciudad':'huancayo'
    })
   });*/  
   const clone=req.clone({
    setHeaders:{
      Authorization:'Bearer 131787824032904S'
    },
   });  
    return next.handle(clone);
  }
}

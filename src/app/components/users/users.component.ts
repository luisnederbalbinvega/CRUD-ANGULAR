import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private userService:UsersService,private http:HttpClient){
  }
  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data)=>{
        console.log(data);
        
      }
      );
  }

}

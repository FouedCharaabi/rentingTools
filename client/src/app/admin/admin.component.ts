import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tools } from "./tools"
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  url: string = "http://localhost:5000/admin"
 

  constructor(private http: HttpClient) { }
  // getTools() : Observable< Tools[] > {
   
  //   return this.http.get < Tools[] > (this.url)
     
      
  //   }
  // }
}
  // deletePost() {
  //   let url = "http://localhost:5000/users/posts"
  //   this.http.delete(url).subscribe(data => {
  //     console.log(data);
  //   });
  // }
  
  

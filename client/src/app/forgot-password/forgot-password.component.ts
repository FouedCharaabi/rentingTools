import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string=""
password: string=""
  constructor(private http:HttpClient) { }

  post(){
    console.log(this.email);
  
  let url = "http://localhost:5000/users/forgot/update"
  this.http.post(url,{
    email1:this.email,
    password1:this.password
  }).subscribe((data)=>{console.log(data);
  })
    }

log(event:any){
  this.email=event
    console.log(this.email);
    
  }
  log1(event:any){
    this.password=event
      
    }

}

import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private http: HttpClient) { }

  username: string = '';
  fullname: string = '';
  email: string = '';
  phone_number: string = '';
  password: string = '';


  signup() {
    console.log( '--------', this.username,this.email)
    let url = "http://localhost:5000/users/signup"
    this.http.post(url, {
      username: this.username,
      fullname: this.fullname,
      email: this.email,
      phone_number: this.phone_number,
      password: this.password
    }).subscribe((data) => {
      console.log(data);
    })
  }

}
 
 
 



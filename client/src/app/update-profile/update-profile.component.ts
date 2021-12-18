import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  constructor(private http: HttpClient) {}
  user = {
    _id: '61ba2614d40127876ce56ad9',
    fullname: 'khalil hamzaoui',
    username: '@khalil_HZ',
    phone_number: 25485966,
    email: 'khlail@gmail.com',
    adrress: 'ariana cité elghazala',
  };
  updateMyprofile = () => {
    console.log('data');
    let url = `http://localhost:5000/users/update/${this.user._id}`;
    this.http.put(url, this.user).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
      complete: () => console.log('complete'),
    });
  };
  ngOnInit(): void {}
}

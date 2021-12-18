import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Tools from '../Models/tool';

@Injectable({
  providedIn: 'root'
})
export class TollsService {

  constructor(private http: HttpClient) { }


  getTolls(): Observable<Tools[]> {
    return this.http.get<Tools[]>("http://localhost:4200/tools")
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './appmodel/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8082/login";
   return this.http.post(url, login); 
  }

}

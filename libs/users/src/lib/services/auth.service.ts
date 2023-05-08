import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/authResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = "http://localhost:5000/api/users";

  constructor(private http:HttpClient) { }


  login(email:string, password:string) : Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.url}/login`, {email,password})
  }
}

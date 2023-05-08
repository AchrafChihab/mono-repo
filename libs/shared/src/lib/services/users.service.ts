import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResOneUser, ResUsers, Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  apiUrl = 'http://localhost:5000/api/users'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<ResUsers> {
    return this.http.get<ResUsers>(this.apiUrl)
  }

  addUsers(category: Users): Observable<ResOneUser> {
    return this.http.post<ResOneUser>(this.apiUrl, category)
  }

  updateUsers(id: string, category: Users): Observable<ResOneUser> {
    return this.http.put<ResOneUser>(`${this.apiUrl}/${id}`, category)
  }

  getUsers(id: string): Observable<ResOneUser> {
    return this.http.get<ResOneUser>(`${this.apiUrl}/${id}`)
  }
  deleteUsers(id: string): Observable<ResOneUser> {
    return this.http.delete<ResOneUser>(`${this.apiUrl}/${id}`)
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Category, ResCategory, ResOneCategory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'http://localhost:5000/api/categories'

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<ResCategory> {
    return this.http.get<ResCategory>(this.apiUrl)
  }

  addCategory(category: Category): Observable<ResOneCategory> {
    return this.http.post<ResOneCategory>(this.apiUrl, category)
  }

  updateCategory(id: string, category: Category): Observable<ResOneCategory> {
    return this.http.patch<ResOneCategory>(`${this.apiUrl}/${id}`, category)
  }

  getCategory(id: string): Observable<ResOneCategory> {
    return this.http.get<ResOneCategory>(`${this.apiUrl}/${id}`)
  }
  deleteCategory(id: string): Observable<ResOneCategory> {
    return this.http.delete<ResOneCategory>(`${this.apiUrl}/${id}`)
  }

}

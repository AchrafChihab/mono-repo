import { Observable } from 'rxjs';
import { ResOneProduct, ResProduct,Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = 'http://localhost:5000/api/products'

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ResProduct> {
    return this.http.get<ResProduct>(this.apiUrl)
  }

  addProduct(formData: FormData): Observable<ResOneProduct> {
    return this.http.post<ResOneProduct>(this.apiUrl, formData)
  }

  updateProduct(id: string, formData: FormData): Observable<ResOneProduct> {
    return this.http.put<ResOneProduct>(`${this.apiUrl}/${id}`, formData)
  }

  getProduct(id: string): Observable<ResOneProduct> {
    return this.http.get<ResOneProduct>(`${this.apiUrl}/${id}`)
  }
  deleteProduct(id: string): Observable<ResOneProduct> {
    return this.http.delete<ResOneProduct>(`${this.apiUrl}/${id}`)
  }
}

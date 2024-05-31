import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {products} from "../data/product.data";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'http://localhost:9000/cart-app/v1';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/product/get-products`);
  }

  saveProduct(product: Product): Observable<any> {
    return this.http.post(`${this.url}/product/insert`, product, {headers: this.httpHeaders});
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.url}/product/update`, product, {headers: this.httpHeaders});
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.url}/product/delete/${id}`);
  }
}

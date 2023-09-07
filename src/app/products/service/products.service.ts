import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(`${environment.baseApi}products`);
  }

  getAllCatigories() {
    return this.http.get(`${environment.baseApi}products/categories`);
  }
  getCatigories(c:string){
    return this.http.get(`${environment.baseApi}products/category/${c}`);
  }

  getProductById(id:number){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}

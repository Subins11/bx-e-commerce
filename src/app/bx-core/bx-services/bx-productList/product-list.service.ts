import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private productAPI = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

//Get Request

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productAPI)
    .pipe(map((res:any) =>{
      return res
    }));
  }

  //Get by Product id
  
  getProductById(productId: string): Observable<any> {
    return this.http.get<any>(`${this.productAPI}/${productId}`);
  }
}
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Product } from '../product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/products';
  getProducts(): Observable<Product[]> {
    //component içindeki kısım subscribe olabilir.
    return this.http.get<Product[]>(this.path);
  }
  addProuduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        //class içinde obje olmaası istenir
        'Content-Type': 'application/json',
        Authorization: 'Tokien',
      }),
    };
    return this.http.post<Product>(this.path, product, httpOptions);
  }
}

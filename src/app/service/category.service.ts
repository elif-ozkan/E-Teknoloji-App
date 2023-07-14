import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/categories';
  getCategory(): Observable<Category[]> {
    //component içindeki kısım subscribe olabilir.Observable subscribe olmayı sağlar.
    return this.http.get<Category[]>(this.path);
  }
}

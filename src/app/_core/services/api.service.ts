import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Fuel } from '../models/fuel.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  get(path: string, data = {}): Observable<Fuel[]> {
    return this.http.get<Fuel[]>(path, { params: data })
      .pipe(catchError(error => throwError(error)));
  }
}
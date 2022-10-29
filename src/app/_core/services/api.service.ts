import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(path: string, data = {}): Observable<any> {
    return this.http.get(path, { params: data })
      .pipe(catchError(error => throwError(error)));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      path,
      JSON.stringify(body), {
      responseType: 'json',
      headers: {
        'Accept': 'application/json', 'Content-type': 'application/json'
      }
    }
    ).pipe(catchError(error => throwError(error)));
  }
}
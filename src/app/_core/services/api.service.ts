import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  get(path: string, data = {}): Observable<any> {
    return this.http.get(path, {params: data})
      .pipe(catchError(error => throwError(error)));
  }
}

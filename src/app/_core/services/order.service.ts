import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from "./api.service";
import { IOrderDTO } from '../interfaces/iorder-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient, private apiService: ApiService) { }

  public getFuel() {
    return this.apiService.get(`${this.url}fuel`);
  }

  public getOrder() {
    return this.apiService.get(`${this.url}order`);
  }

  public saveOrder(order: IOrderDTO) {
    return this.http.post(`${this.url}order`, { order: order });
  }
}
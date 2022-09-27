import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../_core/services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orderBlockData: any[] = [];

  constructor(private orderService: OrderService) { }

  private getFuel(): void {
    this.orderService.getFuel().subscribe(response => {
      this.orderBlockData = response;
    })
  }

  ngOnInit(): void {
    this.getFuel();
  }

}

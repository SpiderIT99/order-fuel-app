import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_core/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit{
  public orderListData: any[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  private getOrder(): void {
    this.orderService.getOrder().subscribe( (response) => {
      this.orderListData = response;
      console.log(response)
    }, error => {
      console.error("error: ", error);
    })
  }
}
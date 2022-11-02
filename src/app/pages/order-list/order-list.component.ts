import { Component, OnInit } from '@angular/core';
import { OrderList } from 'src/app/_core/models/order-list.model';
import { OrderService } from 'src/app/_core/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  public orderListData: OrderList[] = [];
  activeView: boolean = false;
  activeIndex: number = 0;
  dataOrderPreview: OrderList = new OrderList;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  private getOrder(): void {
    this.orderService.getOrder().subscribe((response: OrderList[]) => {
      this.orderListData = response;
    }, error => {
      console.error("error: ", error);
    })
  }

  activateOrderPreview(index: number): void {
    this.dataOrderPreview = this.orderListData[index];
    this.activeIndex = index;
    this.activeView = true;
  }

  exitOrderPreview(): void {
    this.activeView = false;
  }
}
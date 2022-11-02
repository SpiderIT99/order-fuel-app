import { Component, Input, OnInit } from '@angular/core';
import { OrderList } from 'src/app/_core/models/order-list.model';

@Component({
  selector: 'app-order-list-block',
  templateUrl: './order-list-block.component.html'
})
export class OrderListBlockComponent implements OnInit {
  @Input() data: OrderList = new OrderList;
  fullSrc: string = '';

  ngOnInit(): void {
    this.fullSrc = ('../../../assets/img/' + this.data.fuel.src + '.png');
  }
}
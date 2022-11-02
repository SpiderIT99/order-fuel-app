import { Component, Input } from '@angular/core';
import { OrderList } from 'src/app/_core/models/order-list.model';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.scss']
})
export class OrderPreviewComponent {
  @Input() data = new OrderList;
  priceUnit: string='ZŁ';
}

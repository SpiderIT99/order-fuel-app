import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { OrderList } from 'src/app/_core/models/order-list.model';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.scss']
})
export class OrderPreviewComponent implements OnChanges, OnInit {
  @Input() data: OrderList = new OrderList;
  @Input() activeIndex: number = 0;
  @Input() maxIndex: number = 0;
  @Output() changePreviewOrder = new EventEmitter<number>();
  priceUnit: string = 'ZŁ';
  next: boolean = true;
  previous: boolean = true;

  ngOnChanges(): void {
    this.checkCurrentOrder();
  }

  ngOnInit(): void {
    this.checkCurrentOrder();
  }

  checkCurrentOrder(): void {
    this.activeIndex == this.maxIndex ? this.next = false : this.next = true;
    this.activeIndex == 0 ? this.previous = false : this.previous = true;
  }

  changePreview(changeValue: number): void {
    this.changePreviewOrder.emit(this.activeIndex + changeValue);
  }
}
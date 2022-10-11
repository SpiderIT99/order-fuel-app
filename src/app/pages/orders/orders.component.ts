import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../_core/services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orderBlockData: any[] = [];
  activeForm = false;
  nameToForm: string = "";
  srcToForm: string = "";
  priceToForm: string = "";
  unitToForm: string = "";

  constructor(private orderService: OrderService) { }

  private getFuel(): void {
    this.orderService.getFuel().subscribe(response => {
      this.orderBlockData = response;
    })
  }

  ngOnInit(): void {
    this.getFuel();
  }

  activateForm(name: string, src: string, price: string, unit: string) {
    this.nameToForm = name;
    this.srcToForm = src;
    this.priceToForm = price;
    this.unitToForm = unit;
    this.activeForm = true;
  }
}

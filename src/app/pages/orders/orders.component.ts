import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../_core/services/order.service";
import { Fuel } from "../../_core/models/fuel.model";

@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orderBlockData: Fuel[] = [];
  dataToForm: Fuel = new Fuel;
  activeForm = false;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getFuel();
  }

  private getFuel(): void {
    this.orderService.getFuel().subscribe((response: Fuel[]) => {
      this.orderBlockData = response;
    }, error => {
      console.error("error: ", error);
    })
  }

  activateForm(data: Fuel): void {
    this.dataToForm = data;
    this.activeForm = true;
  }

  exitForm(): void {
    this.activeForm = false;
  }
}

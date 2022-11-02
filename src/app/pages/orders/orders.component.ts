import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../_core/services/order.service";
import { Fuel } from "../../_core/models/fuel.model";

@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  public orderBlockData: Fuel[] = [];
  dataToForm: Fuel = new Fuel;
  activeForm: boolean = false;
  showNotification:boolean = false;
  errorSubmitedForm: boolean;

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

  showToast(errorSubmitedForm: boolean): void {
    errorSubmitedForm? undefined : this.exitForm(); //if there is an error when submitting the form then stay on the form
    this.errorSubmitedForm = errorSubmitedForm; //value determines notification  (success or failure)
    this.showNotification = true;
    this.disableToast(3000);
  }

  disableToast(durationNotification: number): void {
    setTimeout( () => {this.showNotification = false}, durationNotification);
  }
}

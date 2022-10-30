import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validateAllFormFields, validateSingleFormField, validatorEmail, validatorPhone, validatorOnlyNumbers, validatorPostalCode, validatorBuildingNumber } from './oredr-form-validators';
import { ItemFormOrderComponent } from 'src/app/components/item-form-order/item-form-order.component';
import { Fuel } from 'src/app/_core/models/fuel.model';
import { OrderService } from "../../_core/services/order.service";
import { IOrderDTO } from 'src/app/_core/interfaces/iorder-dto.interface';

export type EditorType = 'personalData' | 'orderDetails';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})

export class OrderFormComponent implements OnInit {
  @Input() data: Fuel;
  @Output() showSubmissionNotification = new EventEmitter<boolean>();
  @ViewChild('count') fieldCount: ItemFormOrderComponent;
  @ViewChild('description') fielDescription: ItemFormOrderComponent;
  errorStepForm: string = "Wszystkie pola wymagane muszą być poprawnie uzupełnione";
  isErrorStepOne: boolean = false;
  isErrorFullForm: boolean = false;
  errorSubmitedForm: boolean = false;
  orderData: IOrderDTO;

  constructor(private fb: FormBuilder, private orderService: OrderService) { }

  ngOnInit(): void {
    this.updateData();
  }

  public orderForm = this.fb.group({
    fuel: this.fb.group({
      name: [null],
      price: [{ value: null, disabled: true }],
      unit: [{ value: null, disabled: true }],
      src: [null],
    }),
    description: [null, Validators.required],
    phoneNumber: [null, [Validators.required, validatorPhone]],
    email: [null, [Validators.required, validatorEmail]],
    count: [null, [Validators.required, validatorOnlyNumbers, Validators.min(1), Validators.max(99)]],
    addressDelivery: this.fb.group({
      city: [null, Validators.required],
      postalCode: [null, [Validators.required, validatorPostalCode]],
      street: [null, Validators.required],
      buildingNumber: [null, [Validators.required, validatorBuildingNumber]],
    })
  })

  updateData(): void {
    this.orderForm.patchValue({
      fuel: {
        name: this.data.name,
        price: this.data.price,
        unit: this.data.unit,
        src: this.data.src
      }
    });
  }

  editor: EditorType = 'personalData';
  get personalDataForm() {
    return this.editor === 'personalData';
  }
  get orderDetailsForm() {
    return this.editor === 'orderDetails';
  }

  checkStepOne(): void {
    if (this.orderForm.get('count')?.errors || this.orderForm.get('description')?.errors) {
      this.isErrorStepOne = true;
      validateSingleFormField(this.fieldCount.formControlNameValue);
      validateSingleFormField(this.fielDescription.formControlNameValue);
    }
    else {
      this.isErrorStepOne = false;
      this.toggleScreen('orderDetails');
    }
  }

  toggleScreen(type: EditorType): void {
    this.editor = type;
  }

  public submitOrder(): void {
    if (!this.orderForm.valid) {
      validateAllFormFields(this.orderForm);
      this.isErrorFullForm = true;
      this.errorSubmitedForm = true;
      this.showSubmissionNotification.emit(this.errorSubmitedForm);
      return;
    }
    this.isErrorFullForm = false;
    this.errorSubmitedForm = false;
    this.orderData = this.orderForm.getRawValue();
    this.saveOrder(this.orderData);
    this.showSubmissionNotification.emit(this.errorSubmitedForm);
  }

  private saveOrder(submitedData: IOrderDTO): void {
    this.orderService.saveOrder(submitedData).subscribe(error => {
      console.error("error: ", error);
      this.errorSubmitedForm = true;
    })
  }
}
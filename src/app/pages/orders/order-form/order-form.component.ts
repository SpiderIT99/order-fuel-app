import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validateAllFormFields, validateSingleFormField, validatorEmail, validatorPhone, validatorOnlyNumbers, validatorPostalCode, validatorBuildingNumber } from './oredr-form-validators';
import { ItemFormOrderComponent } from 'src/app/components/item-form-order/item-form-order.component';
import { Fuel } from 'src/app/_core/models/fuel.model';

export type EditorType = 'personalData' | 'orderDetails';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})

export class OrderFormComponent implements OnInit {
  @Input() data: Fuel;
  @ViewChild('count') fieldCount: ItemFormOrderComponent;
  @ViewChild('description') fielDescription: ItemFormOrderComponent;
  errorStepForm: string = "Wszystkie pola wymagane muszą być poprawnie uzupełnione";
  isErrorStepOne: boolean = false;
  isErrorFullForm: boolean = false;

  constructor(private fb: FormBuilder) { }

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
    description: [null],
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

  onSubmit() {
    validateAllFormFields(this.orderForm);
    this.displayGeneralError();
    // console.log(this.orderForm.getRawValue());
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

  displayGeneralError(): void {
    this.orderForm.invalid ? this.isErrorFullForm = true : this.isErrorFullForm = false;
  }
}
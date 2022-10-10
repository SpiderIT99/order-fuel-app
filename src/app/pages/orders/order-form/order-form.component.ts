import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validateAllFormFields, validateSingleFormField } from './oredr-form-validators';
import { ItemFormOrderComponent } from 'src/app/components/item-form-order/item-form-order.component';

export type EditorType = 'personalData' | 'orderDetails';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})

export class OrderFormComponent implements OnInit {
  @ViewChild('count') fieldCount: ItemFormOrderComponent;
  @ViewChild('description') fielDescription: ItemFormOrderComponent;

  errorStepForm: string = "Wszystkie pola wymagane muszą być poprawnie uzupełnione";
  isErrorStepOne: boolean = false;

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
    description: [null, Validators.maxLength(200)],
    phoneNumber: [null, Validators.required],
    // email: [null, [Validators.required, email]],
    email: [null, Validators.required],
    count: [null, Validators.required],
    addressDelivery: this.fb.group({
      city: [null, Validators.required],
      postalCode: [null, Validators.required],
      street: [null, Validators.required],
      buildingNumber: [null, Validators.required],
    })
  })

  updateData() {
    this.orderForm.patchValue({
      fuel: {
        name: 'name',
        price: 'price',
        unit: 'unit',
        src: 'src'
      }
    });
  }

  editor: EditorType = 'personalData';
  get showPersonalData() {
    return this.editor === 'personalData';
  }
  get showOrderDetails() {
    return this.editor === 'orderDetails';
  }

  onSubmit() {
    validateAllFormFields(this.orderForm);
    // console.log(this.orderForm.value);
  }

  checkStepOne() {
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

  toggleScreen(type: EditorType) {
    this.editor = type;
  }
}
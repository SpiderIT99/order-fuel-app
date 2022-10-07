import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validateAllFormFields } from './oredr-form-validators'


export type EditorType = 'personalData' | 'orderDetails';



@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})

export class OrderFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateData();
  }

  public orderForm = this.fb.group({
    fuel: this.fb.group({
      name: [null],
      price: [null],
      unit: [null],
      src: [null],
    }),
    description: [null, [Validators.required, Validators.maxLength(200)]],
    phoneNumber: [null, Validators.required],
    // email: [null, [Validators.required, email]],
    email: [null, [Validators.required]],
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

  onSubmit() {
    validateAllFormFields(this.orderForm);
  }

  editor: EditorType = 'personalData';
  get showPersonalData() {
    return this.editor === 'personalData';
  }
  get showOrderDetails() {
    return this.editor === 'orderDetails';
  }

  toggleScreen(type: EditorType) {
    this.editor = type;
  }
}

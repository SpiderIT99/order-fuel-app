import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-oredr-form',
  templateUrl: './oredr-form.component.html',
  styleUrls: ['./oredr-form.component.scss']
})

export class OredrFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public orderForm = this.fb.group({
    fuel: this.fb.group({
      name: [null],
      price: [null],
      unit: [null],
      src: [null],
    }),
    description: [null, Validators.required],
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

}

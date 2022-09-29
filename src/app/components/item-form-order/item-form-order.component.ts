import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-form-order',
  templateUrl: './item-form-order.component.html',
  styleUrls: ['./item-form-order.component.scss']
})
export class ItemFormOrderComponent implements OnInit {
  @Input() placeholder: string = "";
  @Input() span: string = "";
  @Input() formControlNameValue: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}

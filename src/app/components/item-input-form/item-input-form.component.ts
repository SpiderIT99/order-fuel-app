import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-input-form',
  templateUrl: './item-input-form.component.html',
  styleUrls: ['./item-input-form.component.scss']
})
export class ItemInputFormComponent {
  @Input() placeholder: string = "";
  @Input() span: string = "";
  @Input() formControlNameValue: FormControl = new FormControl();
}
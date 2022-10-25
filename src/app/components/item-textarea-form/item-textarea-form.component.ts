import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-textarea-form',
  templateUrl: './item-textarea-form.component.html',
  styleUrls: ['./item-textarea-form.component.scss']
})
export class ItemTextareaFormComponent {
  @Input() placeholder: string = "";
  @Input() span: string = "";
  @Input() formControlNameValue: FormControl = new FormControl();
  @Input() rows: number = 1;
  @Input() maxlength: number = 0;
  textLength: number = 0;

  characterCounter(event: Event): void {
    this.textLength = (((event.target as HTMLInputElement).value).length);
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getValidationMessage } from '../../pages/orders/order-form/oredr-form-validators';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-item-form-order',
  templateUrl: './item-form-order.component.html',
  styleUrls: ['./item-form-order.component.scss']
})
export class ItemFormOrderComponent implements OnInit {
  @Input() placeholder: string = "";
  @Input() span: string = "";
  @Input() formControlNameValue: FormControl = new FormControl();

  public error$: Subject<string> = new Subject();
  private subscription$: Subscription = new Subscription();


  ngOnInit(): void {
    this.handleChanges();
  }

  private handleChanges(): void {
    if (this.formControlNameValue) {
      this.subscription$.add(this.formControlNameValue.statusChanges.subscribe(() => this.getError()));
    }
  }

  private getError(): void {
    if (this.formControlNameValue.errors && !this.formControlNameValue.errors.hasOwnProperty('required') && this.formControlNameValue.value === '') {
      this.error$.next(undefined);
      return;
    }
    if (this.formControlNameValue.touched) {
      if (this.formControlNameValue.errors) {
        const key = Object.keys(this.formControlNameValue.errors)[0];
        this.error$.next(getValidationMessage(key, this.formControlNameValue.errors[key]));
      } else {
        this.error$.next(undefined);
      }
    }
  }
}
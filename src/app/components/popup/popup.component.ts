import { Component, Output, EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Output() disablePopup = new EventEmitter<string>();
  @HostListener('window:keyup.escape')
  keyEvent(): void {
    this.disablePopup.emit();
  }

  exitPopup(): void {
    this.disablePopup.emit();
  }
}
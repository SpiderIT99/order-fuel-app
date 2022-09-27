import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-block',
  templateUrl: './order-block.component.html',
  styleUrls: ['./order-block.component.scss']
})
export class OrderBlockComponent implements OnInit {
  @Input() name: string = '';
  @Input() src: string = '';
  @Input() price: string = '';
  @Input() unit: string = '';
  alt = this.src;
  fullSrc='';
  constructor() { }

  ngOnInit(): void {
  this.fullSrc=('../../../assets/img/'+ this.src + '.png');
  }

}

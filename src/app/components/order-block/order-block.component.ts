import { Component, Input, OnInit } from '@angular/core';
import { Fuel } from 'src/app/_core/models/fuel.model';

@Component({
  selector: 'app-order-block',
  templateUrl: './order-block.component.html'
})
export class OrderBlockComponent implements OnInit {
  @Input() data: Fuel = new Fuel;
  fullSrc: string='';
  priceUnit: string='ZŁ';

  ngOnInit(): void {
  this.fullSrc=('../../../assets/img/'+ this.data.src + '.png');
  }
}

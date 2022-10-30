import { Component, Input, OnInit } from '@angular/core';
import { Fuel } from 'src/app/_core/models/fuel.model';

@Component({
  selector: 'app-order-block',
  templateUrl: './order-block.component.html',
  styleUrls: ['./order-block.component.scss']
})
export class OrderBlockComponent implements OnInit {
  @Input() data: Fuel = new Fuel;
  alt: string = this.data.src;
  fullSrc: string='';
  priceUnit: string='zł';

  ngOnInit(): void {
  this.fullSrc=('../../../assets/img/'+ this.data.src + '.png');
  }
}

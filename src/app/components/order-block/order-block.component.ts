import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-block',
  templateUrl: './order-block.component.html',
  styleUrls: ['./order-block.component.scss']
})
export class OrderBlockComponent implements OnInit {
  name ="Węgiel";
  price = "1600";
  unit = "T";
  src = "coal";


  constructor() { }

  ngOnInit(): void {
  }

}

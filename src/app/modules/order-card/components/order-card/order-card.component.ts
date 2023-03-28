import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IOrder, IProduct } from 'src/app/modules/basket/models/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
  providers: [DatePipe]
})
export class OrderCardComponent {
  @Input() product?: IProduct | IOrder;
  @Input() isMain: boolean = false;
  fileUrl: string;
  constructor() {
    this.fileUrl = environment.API_URL;
  }
}

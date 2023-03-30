import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IMyPromotion } from '../../models/my-promotion';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.scss'],
  providers: [DatePipe]
})
export class PromotionCardComponent {
  @Input() promotion?: IMyPromotion;
}

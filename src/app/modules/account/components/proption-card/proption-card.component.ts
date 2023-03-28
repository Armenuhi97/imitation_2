import { Component, Input } from '@angular/core';
import { IPromotion } from '../../models/promotion.model';

@Component({
  selector: 'app-proption-card',
  templateUrl: './proption-card.component.html',
  styleUrls: ['./proption-card.component.scss']
})
export class ProptionCardComponent {
  @Input() promotion?: IPromotion;
}

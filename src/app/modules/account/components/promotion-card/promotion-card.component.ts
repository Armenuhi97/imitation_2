import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPromotion } from '../../models/promotion.model';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.scss']
})
export class PromotionCardComponent {
  @Input() promotion?: IPromotion;
  @Input() isActive = false;
  @Output() select = new EventEmitter();
  selectPromotion() {
    this.select.emit();
  }
}

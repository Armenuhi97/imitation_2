import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPromotion } from '../../models/promotion.model';
import { PromotionService } from '../../services/promotion.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  promotions$: Observable<IPromotion[]>;
  constructor(private promotionService: PromotionService) {
    this.promotions$ = this.promotionService.getPromotions();
  }

}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IMyPromotion } from '../../models/my-promotion';
import { MyPromotionService } from '../../services/my-promotion.service';

@Component({
  selector: 'app-my-promotions',
  templateUrl: './my-promotions.component.html',
  styleUrls: ['./my-promotions.component.scss']
})
export class MyPromotionsComponent {
  myPromotions$: Observable<IMyPromotion[]>;
  constructor(private myPromotionService: MyPromotionService) {
    this.myPromotions$ = this.myPromotionService.getMyPromotions();
  }

}

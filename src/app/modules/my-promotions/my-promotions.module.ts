import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPromotionsRoutingModule } from './my-promotions-routing.module';
import { MyPromotionsComponent } from './components/my-promotions/my-promotions.component';
import { TranslateModule } from '@ngx-translate/core';
import { PromotionCardComponent } from './components/promotion-card/promotion-card.component';
import { MyPromotionService } from './services/my-promotion.service';


@NgModule({
  declarations: [
    MyPromotionsComponent,
    PromotionCardComponent
  ],
  imports: [
    CommonModule,
    MyPromotionsRoutingModule,
    TranslateModule
  ],
  providers: [MyPromotionService]
})
export class MyPromotionsModule { }

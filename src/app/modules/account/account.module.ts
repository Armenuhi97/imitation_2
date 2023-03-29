import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account/account.component';
import { TranslateModule } from '@ngx-translate/core';
import { AccountRoutingModule } from './account-routing.module';
import { CalculateCardComponent } from './components/calculate-card/calculate-card.component';
import { PromotionService } from './services/promotion.service';
import { FormsModule } from '@angular/forms';
import { PromotionCardComponent } from './components/promotion-card/promotion-card.component';



@NgModule({
  declarations: [AccountComponent, CalculateCardComponent, PromotionCardComponent],
  imports: [
    CommonModule,
    TranslateModule,
    AccountRoutingModule,
    FormsModule
  ],
  providers: [PromotionService]
})
export class AccountModule { }

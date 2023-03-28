import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account/account.component';
import { TranslateModule } from '@ngx-translate/core';
import { AccountRoutingModule } from './account-routing.module';
import { CalculateCardComponent } from './components/calculate-card/calculate-card.component';
import { ProptionCardComponent } from './components/proption-card/proption-card.component';
import { PromotionService } from './services/promotion.service';



@NgModule({
  declarations: [AccountComponent, CalculateCardComponent, ProptionCardComponent],
  imports: [
    CommonModule,
    TranslateModule,
    AccountRoutingModule
  ],
  providers: [PromotionService]
})
export class AccountModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './components/account/account.component';
import { PromotionCardComponent } from './components/promotion-card/promotion-card.component';
import { AccountRoutingModule } from './account-routing.module';
import { CalculateCardComponent } from './components/calculate-card/calculate-card.component';
import { PromotionService } from './services/promotion.service';
import { RoundPipe } from 'src/app/pipes/round.pipe';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [AccountComponent, CalculateCardComponent, PromotionCardComponent,
    RoundPipe],
  imports: [
    CommonModule,
    TranslateModule,
    AccountRoutingModule,
    FormsModule,
    LoaderModule
  ],
  providers: [PromotionService]
})
export class AccountModule { }

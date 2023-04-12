import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawRoutingModule } from './withdraw-routing.module';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { EmptyWithdrawComponent } from './components/empty-withdraw/empty-withdraw.component';
import { FullWithdrawComponent } from './components/full-withdraw/full-withdraw.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { WithdrawService } from './services/withdraw.service';
import { LoaderModule } from '../loader/loader.module';
import { CreditDebitMaskPipePipe } from './pipes/card-number.pipe';


@NgModule({
  declarations: [
    WithdrawComponent,
    EmptyWithdrawComponent,
    FullWithdrawComponent,
    CreditDebitMaskPipePipe
  ],
  imports: [
    CommonModule,
    WithdrawRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    LoaderModule
  ],
  providers: [WithdrawService]
})
export class WithdrawModule { }

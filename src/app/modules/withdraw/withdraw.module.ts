import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawRoutingModule } from './withdraw-routing.module';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { EmptyWithdrawComponent } from './components/empty-withdraw/empty-withdraw.component';
import { FullWithdrawComponent } from './components/full-withdraw/full-withdraw.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from '../password/password.module';


@NgModule({
  declarations: [
    WithdrawComponent,
    EmptyWithdrawComponent,
    FullWithdrawComponent
  ],
  imports: [
    CommonModule,
    WithdrawRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    PasswordModule

  ]
})
export class WithdrawModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositRoutingModule } from './deposit-routing.module';
import { DepositComponent } from './components/deposit/deposit.component';
import { TranslateModule } from '@ngx-translate/core';
import { TextCopyDirective } from 'src/app/directives/copy.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DepositService } from './services/deposit.service';
import { LoaderModule } from '../loader/loader.module';


@NgModule({
  declarations: [
    DepositComponent,
    TextCopyDirective
  ],
  imports: [
    CommonModule,
    DepositRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    LoaderModule
  ],
  providers: [DepositService]
})
export class DepositModule { }

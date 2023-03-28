import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    OrderCardComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [OrderCardComponent]
})
export class OrderCardModule { }

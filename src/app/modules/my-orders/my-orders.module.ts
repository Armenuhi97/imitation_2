import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderCardModule } from '../order-card/order-card.module';
import { MyOrdersRoutingModule } from './my-orders-routing.module';
import { MyOrderService } from './services/my-order.service';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyOrdersComponent
  ],
  imports: [
    MyOrdersRoutingModule,
    CommonModule,
    OrderCardModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  providers: [MyOrderService]
})
export class MyOrdersModule { }

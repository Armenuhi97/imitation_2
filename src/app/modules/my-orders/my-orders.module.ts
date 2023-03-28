import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderCardModule } from '../order-card/order-card.module';
import { MyOrdersRoutingModule } from './my-orders-routing.module';
import { MyOrderService } from './services/my-order.service';



@NgModule({
  declarations: [
    MyOrdersComponent
  ],
  imports: [
    MyOrdersRoutingModule,
    CommonModule,
    OrderCardModule
  ],
  providers: [MyOrderService]
})
export class MyOrdersModule { }

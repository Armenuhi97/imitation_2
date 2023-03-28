import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './components/basket/basket.component';
import { BasketCardComponent } from './components/basket-card/basket-card.component';
import { BasketRoutingModule } from './basket-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { OrderComponent } from './components/order/order.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { LevelService } from './services/level.service';
import { OrderCardModule } from '../order-card/order-card.module';
import { NotificationComponent } from './dialogs/notification/notification.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessPaidComponent } from './dialogs/success-paid/success-paid.component';
import { ProductService } from './services/product.service';
import { LoaderModule } from '../loader/loader.module';


@NgModule({
  declarations: [
    BasketComponent,
    BasketCardComponent,
    OrderComponent,
    OrderCardComponent,
    BalanceCardComponent,
    NotificationComponent,
    SuccessPaidComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    TranslateModule,
    OrderCardModule,
    MatDialogModule,
    LoaderModule
  ],
  providers: [
    LevelService,
    ProductService]
})
export class BasketModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasketComponent } from "./components/basket/basket.component";
import { OrderComponent } from "./components/order/order.component";
const routes: Routes = [
    { path: '', component: BasketComponent },
    { path: 'product/:id', component: OrderComponent }];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BasketRoutingModule { }
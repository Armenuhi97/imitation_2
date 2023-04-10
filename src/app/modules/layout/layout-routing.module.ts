import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
const routes: Routes = [{
    path: '', component: LayoutComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
        { path: 'my-orders', loadChildren: () => import('../my-orders/my-orders.module').then(m => m.MyOrdersModule) },
        { path: 'basket', loadChildren: () => import('../basket/basket.module').then(m => m.BasketModule) },
        { path: 'my-promotions', loadChildren: () => import('src/app/modules/my-promotions/my-promotions.module').then(m => m.MyPromotionsModule) }
    ]
}]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
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
        { path: 'my-promotions', loadChildren: () => import('src/app/modules/my-promotions/my-promotions.module').then(m => m.MyPromotionsModule) },
        { path: 'about-us', loadChildren: () => import('src/app/modules/about-us/about-us.module').then(m => m.AboutUsModule) },
        { path: 'rewards', loadChildren: () => import('src/app/modules/rewards/rewards.module').then(m => m.RewardsModule) },
        { path: 'platform-rules', loadChildren: () => import('src/app/modules/platform-rules/platform-rules.module').then(m => m.PlatformRulesModule) },

    ]
}]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
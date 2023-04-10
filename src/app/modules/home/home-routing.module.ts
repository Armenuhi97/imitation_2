import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auction', loadChildren: () => import('src/app/modules/account/account.module').then(m => m.AccountModule) },
    { path: 'deposit', loadChildren: () => import('src/app/modules/deposit/deposit.module').then(m => m.DepositModule) },
    { path: 'withdraw', loadChildren: () => import('src/app/modules/withdraw/withdraw.module').then(m => m.WithdrawModule) }


];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
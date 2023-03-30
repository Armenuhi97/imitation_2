import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPromotionsComponent } from './components/my-promotions/my-promotions.component';

const routes: Routes = [{ path: '', component: MyPromotionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPromotionsRoutingModule { }

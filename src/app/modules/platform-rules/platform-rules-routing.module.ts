import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformRulesComponent } from './components/platform-rules/platform-rules.component';

const routes: Routes = [{path:'',component:PlatformRulesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRulesRoutingModule { }

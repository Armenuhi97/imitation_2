import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RewardsRoutingModule } from './rewards-routing.module';
import { RewardsComponent } from './components/rewards/rewards.component';
import { ConfigModule } from '../config/config.module';


@NgModule({
  declarations: [
    RewardsComponent
  ],
  imports: [
    CommonModule,
    RewardsRoutingModule,
    ConfigModule
  ]
})
export class RewardsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRulesRoutingModule } from './platform-rules-routing.module';
import { PlatformRulesComponent } from './components/platform-rules/platform-rules.component';
import { ConfigModule } from '../config/config.module';

@NgModule({
  declarations: [
    PlatformRulesComponent
  ],
  imports: [
    CommonModule,
    PlatformRulesRoutingModule,
    ConfigModule
  ]
})
export class PlatformRulesModule { }

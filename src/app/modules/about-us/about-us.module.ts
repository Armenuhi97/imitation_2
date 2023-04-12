import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { AboutUsComponent } from './components/about-us.components';
import { ConfigModule } from '../config/config.module';


@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    ConfigModule
  ]
})
export class AboutUsModule { }

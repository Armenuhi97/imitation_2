import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './components/config/config.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ConfigComponent,
    TranslateModule]
})
export class ConfigModule { }

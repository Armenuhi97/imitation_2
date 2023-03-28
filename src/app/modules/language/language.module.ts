import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageRoutingModule } from './language-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ChooseLanguageComponent } from './components/choose-language/choose-language.component';



@NgModule({
  declarations: [ChooseLanguageComponent],
  imports: [
    CommonModule,
    LanguageRoutingModule,
    TranslateModule
  ]
})
export class LanguageModule { }

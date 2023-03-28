import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { MainComponent } from './components/layout/main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }

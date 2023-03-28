import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { NewsComponent } from './components/news/news.component';
import { ShineButtonComponent } from './components/shine-button/shine-button.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCardComponent,
    NewsComponent,
    ShineButtonComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    CarouselModule
  ],
  providers: [HomeService]
})
export class HomeModule { }

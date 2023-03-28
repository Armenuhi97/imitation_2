import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subject, takeUntil, tap } from 'rxjs';
import { ButtonSectionMenu, CardMenu } from '../../config/menu';
import { customOptions } from '../../config/slider-options';
import { ISliderImage } from '../../models/slider.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  slides: ISliderImage[] = [];
  customOptions: OwlOptions = customOptions;
  homeMenu = CardMenu;
  buttonsMenu = ButtonSectionMenu;
  unsubscribe$ = new Subject<void>();

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getSliderImage()
  }

  public getSliderImage(): void {
    this.homeService.getSliderImages().pipe(
      takeUntil(this.unsubscribe$),
      tap((data) => {
        this.slides = data;
      })
    ).subscribe();
  }
  
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

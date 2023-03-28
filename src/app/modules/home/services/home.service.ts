import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISliderImage } from '../models/slider.model';

@Injectable()
export class HomeService {

  constructor(private httpClient: HttpClient) { }
  getSliderImages(): Observable<ISliderImage[]> {
    return this.httpClient.get<ISliderImage[]>('image/');
  }
}

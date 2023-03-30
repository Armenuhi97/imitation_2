import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMyPromotion } from '../models/my-promotion';

@Injectable()
export class MyPromotionService {

  constructor(private httpClient: HttpClient) { }
  
  public getMyPromotions(): Observable<IMyPromotion[]> {
    return this.httpClient.get<IMyPromotion[]>('get-my-promotions/');
  }
}

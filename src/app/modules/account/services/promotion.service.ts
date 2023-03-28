import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPromotion } from '../models/promotion.model';

@Injectable()
export class PromotionService {

  constructor(private httpClient: HttpClient) { }
  getPromotions(): Observable<IPromotion[]> {
    return this.httpClient.get<IPromotion[]>(`promotion/`)
  }
}

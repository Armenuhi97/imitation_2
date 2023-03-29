import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PromotionDto } from '../dto/promotion.dto';
import { IBalance } from '../models/balance.model';
import { IPromotion } from '../models/promotion.model';

@Injectable()
export class PromotionService {

  constructor(private httpClient: HttpClient) { }
  getPromotions(): Observable<IPromotion[]> {
    return this.httpClient.get<IPromotion[]>(`promotion/`)
  }
  createUserPromotion(payload: PromotionDto): Observable<string> {
    return this.httpClient.post<string>(`user-promotion/`, payload);
  }
  getBalance():Observable<IBalance>{
    return this.httpClient.get<IBalance>('my-balance-info/')
  }
}

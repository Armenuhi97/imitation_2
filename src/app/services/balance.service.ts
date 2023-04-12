import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IBalance } from '../modules/basket/models/balance.model';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  constructor(private httpClient: HttpClient) { }
  public getBalanceInfo(): Observable<IBalance> {
    return this.httpClient.get<IBalance>('get-balance/').pipe(
      map((data) => {
        return {
          balance: (data.balance as number).toFixed(2),
          daily_balance: (data.daily_balance as number).toFixed(2),
          yesterday_balance: (data.yesterday_balance as number).toFixed(2),
          daily_orders_count: data.daily_orders_count,
          urish_tiv: data['urish tiv']
        }
      })
    )
  }
}

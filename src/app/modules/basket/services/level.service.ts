import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IBalance } from '../models/balance.model';
import { ILevel } from '../models/livel.model';

@Injectable()
export class LevelService {

  constructor(private httpClient: HttpClient) { }
  public getLevels(): Observable<ILevel[]> {
    return this.httpClient.get<ILevel[]>('level/')
  }
  public getBalance(): Observable<IBalance> {
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

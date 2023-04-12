import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMainWallet } from '../models/wallet.model';
import { Observable } from 'rxjs';
import { DepositBody, IDeposit } from '../models/deposit.model';

@Injectable()
export class DepositService {

  constructor(private httpClient: HttpClient) { }
  getMainWallet(): Observable<IMainWallet[]> {
    return this.httpClient.get<IMainWallet[]>('main-wallet/');
  }
  createDeposit(payload: DepositBody): Observable<IDeposit> {
    return this.httpClient.post<IDeposit>('deposit/', payload);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMainWallet } from '../models/wallet.model';
import { Observable } from 'rxjs';

@Injectable()
export class DepositService {

  constructor(private httpClient: HttpClient) { }
  getMainWallet(): Observable<IMainWallet[]> {
    return this.httpClient.get<IMainWallet[]>('main-wallet/');
  }
}

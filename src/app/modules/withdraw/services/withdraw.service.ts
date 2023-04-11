import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditWithdrawDto } from '../dto/edit-withdraw.dto';
import { IUser } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class WithdrawService {

  constructor(private httpClient: HttpClient) { }
  createWallet(payload: EditWithdrawDto):Observable<IUser> {
    return this.httpClient.post<IUser>('change-wallet/', payload)
  }
}

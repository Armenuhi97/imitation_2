import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: IUser = {} as IUser;
  constructor(private httpClient: HttpClient) { }
  getMe():Observable<IUser> {
    return this.httpClient.get<IUser>('get-me/').pipe(
      tap((user: IUser) => this.setUser(user))
    );
  }
  setUser(user: IUser): void {
    this.user = user;
  }
  getUser() {
    return this.user;
  }
}

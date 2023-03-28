import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { LoginDto } from '../dto/login.dto';
import { RegistrationDto } from '../dto/registration.dto';
import { TokenResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private storageService: StorageService, private router: Router, private userService: UserService) { }

  public get isAuthenticated(): boolean {
    return !!this.storageService.getItemToStorage('access');
  }

  public logout(): void {
    this.storageService.clear();
    this.router.navigate(['/auth/login']);
  }
  login(payload: LoginDto, isRemember: boolean): Observable<TokenResponse> {
    if (isRemember) {
      this.storageService.setStorageType('localStorage');
    } else {
      this.storageService.setStorageType('sessionStorage');
    }
    return this.httpClient.post<TokenResponse>('login/', payload).pipe(
      tap((data: TokenResponse) => {
        this.actionAfterRequest(data);
      })
    )
  }

  registration(payload: RegistrationDto): Observable<TokenResponse> {
    return this.httpClient.post<TokenResponse>('register/', payload).pipe(
      tap((data: TokenResponse) => {
        this.actionAfterRequest(data);
      })
    )
  }

  private actionAfterRequest(data: TokenResponse): void {
    this.userService.setUser(data.user_detail);
    this.storageService.setItemToStorage('access', data.access);
    this.storageService.setItemToStorage('refresh', data.refresh);
    this.router.navigate(['/main']);
  }

}

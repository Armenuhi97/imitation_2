import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,   CanActivate,   RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(
    private readonly authService: AuthService,
  ) {
  }

  canLoad(): boolean {
    return this.isAuthenticated();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isAuthenticated();
  }

  private isAuthenticated(): boolean {
    if (this.authService.isAuthenticated) {
      return true;
    }

    this.authService.logout();
    return false;
  }
}

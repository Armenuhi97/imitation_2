import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
  }

  canLoad(): boolean {
    return this.isNotAuthenticated();
  }

  canActivate(): boolean {
    return this.isNotAuthenticated();
  }

  private isNotAuthenticated(): boolean {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/main']);
      return false;
    }
    return true;
  }
}

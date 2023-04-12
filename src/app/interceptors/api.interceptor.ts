import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { environment } from 'src/environments/environment';
import { NotificationsService } from '../modules/notification/services/notification.service';
import { AuthService } from '../modules/auth/services/auth.service';
import { NotificationTypes } from '../modules/notification/models/notification-types.model';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService,
    private authService: AuthService,
    private notificationsService: NotificationsService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addTokenForRequest(request)).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          // 401 error
          if (error.status === 401) {
            if (this.authService.isAuthenticated) {
              this.authService.logout();
            }
          }
          if (error.status === 400) {
            this.notificationsService.showNotification({
              type: NotificationTypes.ERROR,
              message: error?.error?.message,
            });

          }
          // 403 error
          if (error.status === 403) {
            this.notificationsService.showNotification({
              type: NotificationTypes.ERROR,
              message: 'Access Denied',
            });
          }

          // 500 error
          if (error.status >= 500) {
            this.notificationsService.showNotification({
              type: NotificationTypes.ERROR,
              message: 'Internal Server Error',
            });
          }
        }

        return throwError(() => error);
      }),
    );
  }

  private addTokenForRequest(request: HttpRequest<unknown>) {
    const token = this.storageService.STORAGE.getItem('access');
    const url = this.checkUrl(request.url) ? environment.API_URL + request.url : request.url;
    let data: any = {
      url
    }
    if (token) {
      data = {
        ...data,
        setHeaders: { Authorization: `Bearer ${token}` }
      }
    }
    return request.clone(data);
  }

  private checkUrl(url: string): boolean {
    if (url.includes('assets')) {
      return false;
    }
    return true;
  }
}

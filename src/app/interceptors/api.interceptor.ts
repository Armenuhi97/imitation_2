import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addTokenForRequest(request));
  }

  private addTokenForRequest(request: HttpRequest<unknown>) {
    const token = this.storageService.STORAGE.getItem('access');
    const url = this.checkUrl(request.url) ? environment.API_URL + request.url : request.url;
    if (!token) {
      return request.clone({ url });
    }
    return request.clone({ url, setHeaders: { Authorization: `Bearer ${token}` } });
  }

  private checkUrl(url: string): boolean {    
    if (url.includes('assets')) {
      return false;
    }
    return true;
  }
}

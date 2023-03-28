import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MyOrderService {

  constructor(private httpClient: HttpClient) { }
  getOrder() {
    return this.httpClient.get('order/')
  }
}

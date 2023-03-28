import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderPayload } from '../models/order';
import { IProduct } from '../models/product';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  getProduct(): Observable<IProduct> {
    return this.httpClient.get<IProduct>('get-product/')
  }
  createOrder(payload: OrderPayload) {
    return this.httpClient.post('create-order/', payload)
  }
}

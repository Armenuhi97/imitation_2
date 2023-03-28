import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MyOrderService } from '../../services/my-order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  myOrders: any = [];
  constructor(private myOrderService: MyOrderService) { }
  ngOnInit(): void {
    this.getMyOrder();
  }
  private getMyOrder(): void {
    this.myOrderService.getOrder().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (data) => {
        this.myOrders = data;
      }
    })
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

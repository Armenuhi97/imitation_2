import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'jquery';
import { forkJoin, Observable, Subject, takeUntil, tap } from 'rxjs';
import { IBalance } from '../../models/balance.model';
import { ILevel } from '../../models/livel.model';
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  currentLevel?: ILevel;
  balance?: IBalance;
  orderCount: number = 50;
  constructor(private basketService: LevelService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.combineObservable();
  }
  private combineObservable(): void {
    forkJoin([
      this.getAllLevel(),
      this.getBalance()
    ]).pipe(takeUntil(this.unsubscribe$)).subscribe();
  }
  public onSucceed(): void {
    this.getBalance().pipe(takeUntil(this.unsubscribe$)).subscribe();
  }
  private getBalance() {
    return this.basketService.getBalance().pipe(tap((data) => {
      this.balance = data;
      this.orderCount = 50 - data.daily_orders_count;
    }))
  }
  private getAllLevel(): Observable<ILevel[]> {
    return this.basketService.getLevels().pipe(
      tap((data) => {
        const selectedId = this.activatedRoute.snapshot.params;
        if (!!selectedId['id']) {
          this.currentLevel = data.find((el) => +el.id === +selectedId['id']);
        }
      }))
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

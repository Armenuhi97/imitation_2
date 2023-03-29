import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { PromotionDto } from '../../dto/promotion.dto';
import { IBalance } from '../../models/balance.model';
import { IPromotion } from '../../models/promotion.model';
import { PromotionService } from '../../services/promotion.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  promotions$: Observable<IPromotion[]>;
  transferPrice: number = 0;
  estimatedIncome: number = 0;
  activePromotion?: IPromotion;
  balanceContent?: IBalance;
  errorMessage: string = '';
  constructor(private promotionService: PromotionService) {
    this.promotions$ = this.promotionService.getPromotions();
  }
  ngOnInit(): void {
    this.getBalance().pipe(takeUntil(this.unsubscribe$)).subscribe;
  }
  selectPromotion(item: IPromotion): void {
    this.activePromotion = item;
    this.calculateEstimatedIncome();
  }
  getBalance() {
    return this.promotionService.getBalance().pipe(tap((data) => {
      this.balanceContent = data;
    }))
  }
  changePrice() {
    this.calculateEstimatedIncome();
  }
  private calculateEstimatedIncome(): void {
    if (this.transferPrice && this.activePromotion) {
      this.estimatedIncome = this.transferPrice * this.activePromotion.percent * this.activePromotion.duration
    }
  }
  transfer(): void {
    if (this.activePromotion) {
      if (this.transferPrice >= this.activePromotion.price && this.transferPrice <= this.balanceContent!.balance) {
        const promotionDto = new PromotionDto({ price: this.estimatedIncome, promotion: this.activePromotion.id });
        this.promotionService.createUserPromotion(promotionDto).pipe(takeUntil(this.unsubscribe$),
          switchMap(() => {
            return this.getBalance()
          })).subscribe();
      } else {
        this.errorMessage = 'Error';
      }
    }
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

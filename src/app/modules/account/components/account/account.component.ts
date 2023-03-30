import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
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
  activePromotion?: IPromotion | null;
  balanceContent?: IBalance;
  errorMessage: string = '';
  isClick = false;
  isLoading = false;
  constructor(private promotionService: PromotionService) {
    this.promotions$ = this.promotionService.getPromotions();
  }
  ngOnInit(): void {
    this.getBalance().pipe(takeUntil(this.unsubscribe$)).subscribe();
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
    if (this.activePromotion) {
      this.estimatedIncome = this.transferPrice * this.activePromotion.percent/100 * this.activePromotion.duration
    }
  }
  transfer(): void {
    if (this.isClick) {
      return;
    }
    this.errorMessage = '';
    if (this.activePromotion) {
      if (this.transferPrice >= this.activePromotion.price && this.transferPrice <= this.balanceContent!.balance) {
        const promotionDto = new PromotionDto({ price: this.estimatedIncome, promotion: this.activePromotion.id });
        this.isLoading = true;
        this.isClick = true;
        this.promotionService.createUserPromotion(promotionDto).pipe(takeUntil(this.unsubscribe$),
          finalize(() => { this.isLoading = false; this.isClick = false }),
          switchMap(() => {
            return this.getBalance()
          })).subscribe({
            next: () => {
              this.transferPrice = 0;
              this.estimatedIncome = 0;
              this.activePromotion = null;
            }
          });
      } else {
        this.errorMessage = `transform price must be more than ${this.activePromotion.price} and less than ${this.balanceContent!.balance}`;
      }
    }
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, finalize, takeUntil } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { IBalance } from 'src/app/modules/basket/models/balance.model';
import { BalanceService } from 'src/app/services/balance.service';
import { UserService } from 'src/app/services/user.service';
import { WithdrawService } from '../../services/withdraw.service';
import { CreateWithdrawDto } from '../../dto/create-withdraw.dto';
import { NotificationsService } from 'src/app/modules/notification/services/notification.service';
import { NotificationTypes } from 'src/app/modules/notification/models/notification-types.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-full-withdraw',
  templateUrl: './full-withdraw.component.html',
  styleUrls: ['./full-withdraw.component.scss']
})
export class FullWithdrawComponent implements OnInit, OnDestroy {
  withdrawGroup: FormGroup;
  user: IUser;
  unsubscribe$ = new Subject<void>();
  balance: number = 0;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private balanceService: BalanceService,
    private translateService: TranslateService,
    private withdrawService: WithdrawService,
    private notificationsService: NotificationsService
  ) {
    this.withdrawGroup = this.initGroup();
    this.user = this.userService.getUser();
  }
  ngOnInit(): void {
    this.getBalance();
  }
  private getBalance() {
    this.balanceService.getBalanceInfo().pipe(takeUntil(this.unsubscribe$)).subscribe((data: IBalance) => {
      this.balance = data.balance;
    });
  }
  private initGroup(): FormGroup {
    return this.fb.group({
      price: [null, Validators.required],
      // password: [null, Validators.required]
    })
  }
  createWithdraw(): void {
    if (this.withdrawGroup.invalid) {
      this.notificationsService.showNotification({
        type: NotificationTypes.ERROR,
        message: this.translateService.instant('validation.required')
      });
      return;
    }
    const price = this.withdrawGroup.value.price;
    if (!(price >= 20 && price < this.balance)) {
      this.notificationsService.showNotification({
        type: NotificationTypes.ERROR,
        message: this.translateService.instant('withdraw.error_message')
      });
      return;
    }
    this.isLoading = true;
    const withdrawData = new CreateWithdrawDto(this.withdrawGroup.value, this.user.id)
    this.withdrawService.createWithdraw(withdrawData).pipe(
      takeUntil(this.unsubscribe$),
      finalize(() => this.isLoading = false)).subscribe({
        next: () => {
          this.balance -= price;
          this.withdrawGroup.reset();
          this.notificationsService.showNotification({
            type: NotificationTypes.SUCCESS,
            message: this.translateService.instant('withdraw.withdraw_success_message'),
          });
        }
      });;
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

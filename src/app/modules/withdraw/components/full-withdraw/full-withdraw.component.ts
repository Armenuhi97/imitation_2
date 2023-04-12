import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { IBalance } from 'src/app/modules/basket/models/balance.model';
import { BalanceService } from 'src/app/services/balance.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-full-withdraw',
  templateUrl: './full-withdraw.component.html',
  styleUrls: ['./full-withdraw.component.scss']
})
export class FullWithdrawComponent implements OnInit, OnDestroy {
  withdrawGroup: FormGroup;
  user: IUser;
  unsubscribe$ = new Subject<void>();
  balance: string | number = 0;
  constructor(private fb: FormBuilder, private userService: UserService, private balanceService: BalanceService) {
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
      withdraw_amount: [null, Validators.required],
      password: [null, Validators.required]
    })
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

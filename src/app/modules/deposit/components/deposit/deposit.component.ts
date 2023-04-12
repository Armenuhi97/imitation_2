import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepositService } from '../../services/deposit.service';
import { Subject, finalize, takeUntil } from 'rxjs';
import { IMainWallet } from '../../models/wallet.model';
import { saveAs } from 'file-saver';
import { UserService } from 'src/app/services/user.service';
import { DepositDto } from '../../dto/deposit.dto';
import { NotificationsService } from 'src/app/modules/notification/services/notification.service';
import { NotificationTypes } from 'src/app/modules/notification/models/notification-types.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  mainWallet?: IMainWallet;
  isLoading = false;
  depositGroup: FormGroup;
  constructor(
    private depositService: DepositService,
    private fb: FormBuilder,
    private userService: UserService,
    private translateService: TranslateService,
    private notificationsService: NotificationsService) {
    this.depositGroup = this.initGroup();
  }
  ngOnInit(): void {
    this.getMainWallet();
  }
  private initGroup(): FormGroup {
    return this.fb.group({
      price: [null, Validators.required],
      hash_code: [null, Validators.required]
    })
  }
  getMainWallet(): void {
    this.isLoading = true;
    this.depositService.getMainWallet().pipe(
      takeUntil(this.unsubscribe$),
      finalize(() => this.isLoading = false)
    ).subscribe((data: IMainWallet[]) => {
      if (data.length) {
        this.mainWallet = data[0];
      }
    })
  }
  downloadImg(url: string | undefined): void {
    if (url) {
      saveAs(url, url.slice(url.lastIndexOf('/') + 1));
    }
  }

  createDeposit(): void {
    if (this.depositGroup.invalid) {
      return;
    }
    this.isLoading = true;
    const depositObject = new DepositDto(this.depositGroup.value, this.userService.getUser()?.id);
    this.depositService.createDeposit(depositObject).pipe(
      takeUntil(this.unsubscribe$),
      finalize(() => this.isLoading = false)).subscribe({
        next: () => {
          this.depositGroup.reset();
          this.notificationsService.showNotification({
            type: NotificationTypes.SUCCESS,
            message: this.translateService.instant('deposit.deposit_success_message'),
          });
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

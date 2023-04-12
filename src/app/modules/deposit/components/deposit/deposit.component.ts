import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DepositService } from '../../services/deposit.service';
import { Subject, finalize, takeUntil } from 'rxjs';
import { IMainWallet } from '../../models/wallet.model';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  replanishmentAmountControl = new FormControl(null, Validators.required);
  mainWallet?: IMainWallet;
  isLoading = false;
  constructor(private depositService: DepositService) {
  }
  ngOnInit(): void {
    this.getMainWallet();
  }
  getMainWallet() {
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
  downloadImg(url: string | undefined) {
    if (url) {
      saveAs(url, url.slice(url.lastIndexOf('/') + 1));
    }
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

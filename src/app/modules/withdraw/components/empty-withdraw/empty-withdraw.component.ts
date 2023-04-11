import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WithdrawService } from '../../services/withdraw.service';
import { EditWithdrawDto } from '../../dto/edit-withdraw.dto';
import { Subject, finalize, takeUntil } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-empty-withdraw',
  templateUrl: './empty-withdraw.component.html',
  styleUrls: ['./empty-withdraw.component.scss']
})
export class EmptyWithdrawComponent implements OnDestroy {
  withdrawGroup: FormGroup;
  isLoading = false;
  unsubscribe$ = new Subject<void>();
  @Output() createWallet = new EventEmitter();
  constructor(private fb: FormBuilder, private withdrawService: WithdrawService, private userService: UserService) {
    this.withdrawGroup = this.initGroup();
  }

  private initGroup(): FormGroup {
    return this.fb.group({
      currency: [null, Validators.required],
    })
  }
  setWallet() {
    if (this.withdrawGroup.invalid) {
      return;
    }
    this.isLoading = true;
    const withdrawDto = new EditWithdrawDto(this.withdrawGroup.get('currency')!.value!)
    this.withdrawService.createWallet(withdrawDto).pipe(
      takeUntil(this.unsubscribe$),
      finalize(() => this.isLoading = false)
    ).subscribe({
      next: (data: IUser) => {
        this.userService.setUser(data);
        this.createWallet.emit();
      }
    });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

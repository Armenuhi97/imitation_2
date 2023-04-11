import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-full-withdraw',
  templateUrl: './full-withdraw.component.html',
  styleUrls: ['./full-withdraw.component.scss']
})
export class FullWithdrawComponent {
  withdrawGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.withdrawGroup = this.initGroup();
  }

  private initGroup(): FormGroup {
    return this.fb.group({
      available_amount: [null, Validators.required],
      withdrawal_amount: [null, Validators.required],
      password: [null, Validators.required]
    })
  }
}

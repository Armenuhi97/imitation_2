import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empty-withdraw',
  templateUrl: './empty-withdraw.component.html',
  styleUrls: ['./empty-withdraw.component.scss']
})
export class EmptyWithdrawComponent {
  withdrawGroup: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.withdrawGroup = this.initGroup();
  }

  private initGroup(): FormGroup {
    return this.fb.group({
      currency: [null, Validators.required],
      password: [null, Validators.required]
    })
  }
}

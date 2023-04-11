import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-full-withdraw',
  templateUrl: './full-withdraw.component.html',
  styleUrls: ['./full-withdraw.component.scss']
})
export class FullWithdrawComponent {
  withdrawGroup: FormGroup;
  user: IUser;
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.withdrawGroup = this.initGroup();
    this.user = this.userService.getUser();
  }

  private initGroup(): FormGroup {
    return this.fb.group({
      available_amount: [null, Validators.required],
      withdrawal_amount: [null, Validators.required],
      password: [null, Validators.required]
    })
  }
}

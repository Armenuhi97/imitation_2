import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent {
  replanishmentAmountControl = new FormControl(null, Validators.required);
  constructor() {
  }
}

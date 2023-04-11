import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WithdrawComponent {
  isHasWallet: boolean = false;
  constructor(private userService: UserService) {
    this.isHasWallet = !!this.userService.getUser().wallet;
  }
  getWallet() {
    this.isHasWallet = true;
  }
}

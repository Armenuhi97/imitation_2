import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WithdrawComponent {
  isFull = false;
}

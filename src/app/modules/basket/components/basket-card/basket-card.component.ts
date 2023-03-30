import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { IMyLevel } from '../../models/balance.model';
import { ILevel } from '../../models/livel.model';

@Component({
  selector: 'app-basket-card',
  templateUrl: './basket-card.component.html',
  styleUrls: ['./basket-card.component.scss']
})
export class BasketCardComponent {
  @Input() item: ILevel = {} as ILevel;
  @Input() user: IUser = {} as IUser;
  @Input() myLevel?: IMyLevel;
}

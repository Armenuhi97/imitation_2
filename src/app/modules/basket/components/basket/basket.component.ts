import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ILevel } from '../../models/livel.model';
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  basket$: Observable<ILevel[]>;
  user: IUser;
  constructor(private levelService: LevelService, private userService: UserService) {
    this.basket$ = this.levelService.getLevels();
    this.user = this.userService.getUser();
  }

}

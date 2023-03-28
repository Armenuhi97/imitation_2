import { Component, Input } from '@angular/core';
import { IHomeCard } from '../../models/card.model';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent {
  @Input() menu: IHomeCard = {} as IHomeCard;
}

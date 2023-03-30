import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculate-card',
  templateUrl: './calculate-card.component.html',
  styleUrls: ['./calculate-card.component.scss']
})
export class CalculateCardComponent {
  @Input() title = '';
  @Input() price?: number = 0;
  @Input() isShowPlus = false;
}

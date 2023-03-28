import { Component, Input } from '@angular/core';
import { IButtonMenu } from '../../models/card.model';

@Component({
  selector: 'app-shine-button',
  templateUrl: './shine-button.component.html',
  styleUrls: ['./shine-button.component.scss']
})
export class ShineButtonComponent {
  @Input() menu: IButtonMenu = {} as IButtonMenu;
}

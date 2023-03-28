import { Component } from '@angular/core';
import { MenuList } from '../../utils/footer-menu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  menuList = MenuList;
  constructor() { }
}

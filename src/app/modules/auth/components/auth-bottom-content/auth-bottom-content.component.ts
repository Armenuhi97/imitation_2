import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-bottom-content',
  templateUrl: './auth-bottom-content.component.html',
  styleUrls: ['./auth-bottom-content.component.scss']
})
export class AuthBottomContentComponent {
  @Input() buttonText: string = '';
  @Input() isHaveAccount: string = '';
  @Input() signInOrUpText: string = '';
  @Output() actionOnButton = new EventEmitter<void>();
  @Output() goByLink = new EventEmitter<void>()

  constructor() { }

  clickOnButton(): void {
    this.actionOnButton.emit();
  }
  navigate(): void {
    this.goByLink.emit();
  }
}

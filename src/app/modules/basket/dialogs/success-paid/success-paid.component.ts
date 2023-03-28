import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-success-paid',
  templateUrl: './success-paid.component.html',
  styleUrls: ['./success-paid.component.scss']
})
export class SuccessPaidComponent {
  constructor(public dialogRef: MatDialogRef<NotificationComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  closeModal(): void {
    this.dialogRef.close();
  }
}

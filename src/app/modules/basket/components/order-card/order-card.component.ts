import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize, Subject, takeUntil } from 'rxjs';
import { NotificationComponent } from '../../dialogs/notification/notification.component';
import { SuccessPaidComponent } from '../../dialogs/success-paid/success-paid.component';
import { ILevel } from '../../models/livel.model';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnDestroy {
  @Input() level?: ILevel;
  @Input() orderCount: number = 0;
  unsubscribe$ = new Subject<void>();
  product?: IProduct;
  isClick = false;
  @Output() succeed = new EventEmitter();
  constructor(private matDialog: MatDialog, private productService: ProductService) { }

  getOrder(): void {
    if (this.isClick) {
      return;
    }
    this.isClick = true;
    this.getProduct();
  }

  getProduct(): void {
    this.productService.getProduct().pipe(takeUntil(this.unsubscribe$),
      finalize(() => this.isClick = false)).subscribe({
        next: (product) => {
          this.openDialog(product)
        }
      })
  }
  private openDialog(product: IProduct): void {
    const dialog = this.matDialog.open(NotificationComponent, { width: '500px', panelClass: 'dialog', data: product });
    dialog.afterClosed().pipe(takeUntil(this.unsubscribe$)).subscribe((result) => {
      if (result) {
        this.matDialog.open(SuccessPaidComponent, { width: '500px', panelClass: 'dialog' })
        this.succeed.emit();
      }

    })
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

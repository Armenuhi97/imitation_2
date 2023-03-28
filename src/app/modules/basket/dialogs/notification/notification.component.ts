import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize, Subject, takeUntil } from 'rxjs';
import { OrderDto } from '../../dto/order.dto';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnDestroy {
  public product: IProduct;
  isLoading: boolean = false;
  unsubscribe$ = new Subject<void>();
  constructor(public dialogRef: MatDialogRef<NotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct,
    private productService: ProductService
  ) {
    this.product = data;
  }
  closeModal(status: boolean): void {
    this.dialogRef.close(status);
  }
  createOrder(): void {
    this.isLoading = true;
    const orderDto = new OrderDto({
      amount: this.product.percent_price,
      description: this.product.product.description,
      product: this.product.product.id,
      product_price: this.product.price
    })
    this.productService.createOrder(orderDto).pipe(takeUntil(this.unsubscribe$), finalize(() => this.isLoading = false)).subscribe(() => this.closeModal(true))
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

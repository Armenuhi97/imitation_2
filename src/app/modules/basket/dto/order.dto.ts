import { OrderPayload } from "../models/order";

export class OrderDto {
    amount: number;
    description: string;
    product_price: number;
    product: number;
    constructor(data: OrderPayload) {
        this.amount = data.amount;
        this.description = data.description;
        this.product_price = data.product_price;
        this.product = data.product;
    }
}
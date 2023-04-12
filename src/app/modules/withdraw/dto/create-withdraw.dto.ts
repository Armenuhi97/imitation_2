import { IWithdrawBody } from "../models/withdraw.model";

export class CreateWithdrawDto {
    price: number;
    user: number;
    constructor(data: IWithdrawBody, userId: number) {
        this.price = data.price;
        this.user = userId;
    }
}
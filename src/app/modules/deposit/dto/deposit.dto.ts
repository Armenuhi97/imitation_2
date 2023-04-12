import { DepositBody } from "../models/deposit.model";

export class DepositDto {
    price: number;
    hash_code: string;
    user: number;
    constructor(data: DepositBody, userId: number) {
        this.price = data.price;
        this.hash_code = data.hash_code;
        this.user = userId;
    }
}
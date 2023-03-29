import { PromotionData } from "../models/promotion.model";

export class PromotionDto {
    promotion: number;
    price: number;
    constructor(data: PromotionData) {
        this.promotion = data.promotion;
        this.price = data.price;
    }
}
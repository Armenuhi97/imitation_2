export interface IPromotion {
    duration: number;
    id: number;
    is_visibility: boolean;
    percent: number;
    price: number;
    title: string;
}
export interface PromotionData {
    promotion: number;
    price: number;
}
export interface IBalance {
    balance: number;
    daily_balance: number | string;
    daily_orders_count: number;
    urish_tiv?: number | string;
    ['urish tiv']?: number | string;
    yesterday_balance: number | string;
}
export interface IMyLevel {
    user_with_my_referal: number;
}
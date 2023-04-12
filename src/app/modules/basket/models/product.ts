export interface IProduct extends IOrder {
    percent_price: number;
    price: number;
    product: ProductModel;
}
export interface ProductModel {
    description: string;
    id: number;
    image: string;
    level: number;
}

export interface IOrder {
    percent_price?: number;
    date: string;
    description: string;
    id: number;
    price: number;
    product: ProductModel;
    transaction: ITransaction;
    user: number;
    order_id:number;
}
export interface ITransaction {
    amount: number;
    date: string;
    description: string;
    id: number;
    user: number;
}
export interface IDeposit extends DepositBody {
    id: number;
    status: string;
    date: string;
}
export interface DepositBody {
    price: number;
    hash_code: string;
    user: number;

}
// >=20 < balance
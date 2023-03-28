export interface IUser {
    id: number;
    is_active: boolean;
    level: null | number;
    my_referal_code: String;
    phone_number: string;
    referal_code: string;
    user: {
        email: string;
        first_name: string;
        id: number;
        last_name: string;
        username: string;
    }
}
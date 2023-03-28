import { IUser } from "src/app/models/user.model";

export interface ILogin {
    username: string;
    password: string;
}

export interface TokenResponse {
    access: string;
    refresh: string;
    user_detail:IUser;
}
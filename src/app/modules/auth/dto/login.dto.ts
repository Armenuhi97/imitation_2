import { ILogin } from "../models/login.model"

export class LoginDto {
    username: string;
    password: string;
    constructor(data: ILogin) {
        this.username = data.username;
        this.password = data.password;
    }
}

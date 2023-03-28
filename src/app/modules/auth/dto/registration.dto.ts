import { IRegistration } from "../models/registration.model";

export class RegistrationDto {
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    phone_number: string;
    referal_code: string;
    confirm_password: string;
    constructor(data: IRegistration) {
        this.username = data.username;
        this.password = data.password;
        this.confirm_password = data.confirm_password;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.phone_number = data.phone_number;
        this.referal_code = data.referal_code;
    }
}
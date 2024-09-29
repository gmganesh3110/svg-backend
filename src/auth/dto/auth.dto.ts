export class LoginDto{
    email:string;
    password:string;
}

export class UserDataDto{
    id:number;
    name:string;
    username:string;
    email:string;
    password?:string;
    mobile:string;
    token:string;
}
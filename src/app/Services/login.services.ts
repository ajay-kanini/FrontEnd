import { HttpClient } from "@angular/common/http";
import { LoggedInUserModel } from "../Models/loggedUser.model";
import { Injectable } from "@angular/core";

@Injectable()
export class LogInService
{
    constructor(private httpClient : HttpClient) 
    {
       
        
    }

    LoginService(login:LoggedInUserModel)
    {
        return this.httpClient.post("http://localhost:5250/api/User/Login",login)
    }
}
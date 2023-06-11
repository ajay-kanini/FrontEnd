import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InternModel } from "../Models/intern.model";

@Injectable()
export class RegisterInternService
{
    constructor(private httpClient : HttpClient)
    {

    }
    registerIntern(intern : InternModel)
   {
    return this.httpClient.post("http://localhost:5250/api/User/Register",intern);
   }

}
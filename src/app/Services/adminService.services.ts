import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InternModel } from "../Models/intern.model";
import { RaiseTicketModel } from "../Models/ticket.models";
import { UserModel } from "../Models/user.model";
import { LogDetailsModel } from "../Models/logDetails.models";

@Injectable()
export class AdminService
{
    constructor(private httpClient : HttpClient)
    {

    }

    GetAllUsersService()
    {
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
        return this.httpClient.get("http://localhost:5250/api/User/GetAllUser");
    }

    GetAllTicketService()
    {
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
        return this.httpClient.get("http://localhost:5231/api/Ticket/Get all tickets")
    }

    ResolveTicket(ticketModel : RaiseTicketModel)
    {
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
       return this.httpClient.put("http://localhost:5231/api/Ticket/Update tickets", ticketModel)
    }

    changeStatus(userModel : UserModel)
    {
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
       return this.httpClient.put("http://localhost:5250/api/User/ChangeStatus", userModel)
    }

    getLog()
    {
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
       return this.httpClient.get("http://localhost:5028/api/Log/Get all logs")
    }
}

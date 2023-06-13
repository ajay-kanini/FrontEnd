import { HttpClient, HttpHeaders } from "@angular/common/http"
import { RaiseTicketModel } from "../Models/ticket.models"
import { Injectable } from "@angular/core"
import { changePasswordDTO } from "../Models/changePasswordDTO.models"
import { LogDetailsModel } from "../Models/logDetails.models"

@Injectable()
export class InternService
{ 
    constructor(private httpClient : HttpClient)
    {
       
    }
    
    ticketService(ticketModel:RaiseTicketModel)
    {
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
        return this.httpClient.post("http://localhost:5231/api/Ticket/Add tickets", ticketModel)
    }

    changePasswordService(passwordModel : changePasswordDTO)
    {
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
       return this.httpClient.post("http://localhost:5250/api/User/UpdateInternPassword", passwordModel)
    }
    
    addLog(logDetails : LogDetailsModel)
    {
        var header=new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")?.toString()
        });
       return this.httpClient.post("http://localhost:5028/api/Log/Add log", logDetails)
    }
    
}
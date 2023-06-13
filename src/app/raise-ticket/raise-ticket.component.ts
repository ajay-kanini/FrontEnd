import { Component } from '@angular/core';
import { RaiseTicketModel } from '../Models/ticket.models';
import { InternService } from '../Services/internService.services';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent {
  ticket:RaiseTicketModel;
  constructor(private internService:InternService)
  {
    this.ticket = new RaiseTicketModel();
    var userId = localStorage.getItem("id");
    this.ticket.internId=Number(userId);
  }
  RaiseTicket()
  {
    console.log(this.ticket)
    this.internService.ticketService(this.ticket).subscribe(data=>{
      this.ticket=data as RaiseTicketModel;
      console.log(this.ticket);  
      alert('Ticket successfully raised')    
    },
    err=>{
      console.log(err);
    });
    
  }

}

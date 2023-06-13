import { Component } from '@angular/core';
import { RaiseTicketComponent } from '../raise-ticket/raise-ticket.component';
import { RaiseTicketModel } from '../Models/ticket.models';
import { AdminService } from '../Services/adminService.services';

@Component({
  selector: 'app-resolve-tickets',
  templateUrl: './resolve-tickets.component.html',
  styleUrls: ['./resolve-tickets.component.css']
})
export class ResolveTicketsComponent {
  ticketModel : RaiseTicketModel;
  constructor(private adminService : AdminService)
  {
    this.ticketModel = new RaiseTicketModel();
    var userId = localStorage.getItem("userId");
    this.ticketModel.internId=Number(userId);
  }

  resolveTickets()
  {
    this.adminService.ResolveTicket(this.ticketModel).subscribe(data=>{
      this.ticketModel = data as RaiseTicketModel;    
      alert('Status Updated')
    },
    err=>
    {
      console.log(err);
    });
  }

}

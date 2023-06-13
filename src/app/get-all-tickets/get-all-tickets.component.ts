import { Component } from '@angular/core';
import { AdminService } from '../Services/adminService.services';
import { RaiseTicketModel } from '../Models/ticket.models';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-tickets.component.html',
  styleUrls: ['./get-all-tickets.component.css']
})
export class GetAllTicketsComponent {
     ticketModel : RaiseTicketModel[];
     constructor(private adminService:AdminService)
     {
       this.adminService.GetAllTicketService().subscribe(data=>
        {
          this.ticketModel=data as RaiseTicketModel[];
        },
        err=>
        {
          console.log(err);
        });
     }
}

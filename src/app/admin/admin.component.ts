import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router:Router)
  {

  }
intern()
{
   this.router.navigateByUrl("getAllUsers")
}
approve()
{
   this.router.navigateByUrl("changeStatus")
}
ticket()
{
   this.router.navigateByUrl("getAllTickets")
}
resolve ()
{
   this.router.navigateByUrl("resolveTicket")
}
log()
{
   this.router.navigateByUrl("log")
}
}

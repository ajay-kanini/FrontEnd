import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { GetAllTicketsComponent } from './get-all-tickets/get-all-tickets.component';
import { ResolveTicketsComponent } from './resolve-tickets/resolve-tickets.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { AdminComponent } from './admin/admin.component';
import { InternComponent } from './intern/intern.component';
import { GetLogsComponent } from './get-logs/get-logs.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:'ticket',component:RaiseTicketComponent},
  {path:'getAllUsers',component:GetAllUsersComponent},
  {path:'getAllTickets',component:GetAllTicketsComponent},
  {path:'resolveTicket',component:ResolveTicketsComponent},
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'changeStatus',component:ChangeStatusComponent},
  {path:'admin',component:AdminComponent},
  {path:'intern',component:InternComponent},
  {path:'log',component:GetLogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

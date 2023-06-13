import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterInternService } from './Services/registerIntern.services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LogInService } from './Services/login.services';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { InternService } from './Services/internService.services';
import { AdminService } from './Services/adminService.services';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { GetAllTicketsComponent } from './get-all-tickets/get-all-tickets.component';
import { ResolveTicketsComponent } from './resolve-tickets/resolve-tickets.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { AdminComponent } from './admin/admin.component';
import { InternComponent } from './intern/intern.component';
import { GetLogsComponent } from './get-logs/get-logs.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RaiseTicketComponent,
    GetAllUsersComponent,
    GetAllTicketsComponent,
    ResolveTicketsComponent,
    ChangePasswordComponent,
    ChangeStatusComponent,
    AdminComponent,
    InternComponent,
    GetLogsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [RegisterInternService, LogInService, InternService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { Component } from '@angular/core';
import { LoggedInUserModel } from '../Models/loggedUser.model';
import { LogInService } from '../Services/login.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loggedInModel : LoggedInUserModel;
  loginTime : Date;
  constructor(private loginService:LogInService,private router:Router)
  {
     this.loggedInModel=new LoggedInUserModel();
     this.loginTime = new Date();
  }
  Login()
  {
      this.loginService.LoginService  (this.loggedInModel).subscribe(data=>{
        console.log(data)
        this.loggedInModel=data as LoggedInUserModel;
        console.log(this.loggedInModel);
        localStorage.setItem("token", this.loggedInModel.token);
        localStorage.setItem("role", this.loggedInModel.role);
        var userId = this.loggedInModel.userId.toString();
        localStorage.setItem("id",userId);
        var role = localStorage.getItem("role");
        sessionStorage.setItem("Id" , this.loggedInModel.userId.toString())
        sessionStorage.setItem("role" , this.loggedInModel.role.toString())
        sessionStorage.setItem("token" , this.loggedInModel.token.toString())
        sessionStorage.setItem("loginTime" , this.loginTime.toString())
        if(this.loggedInModel.userId==0)
        {
          alert('Login failed');
        }
        else
        {
          alert('Login successful');          
        }
        if(role=='Admin')
        {
            this.router.navigateByUrl('admin')
        }
        else
        {
           this.router.navigateByUrl('intern')
        }
      },
      err=>
      {
        console.log(err);
      });
  }
  route()
  {
    this.router.navigateByUrl('register');
  }
}

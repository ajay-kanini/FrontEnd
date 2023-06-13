import { Component } from '@angular/core';
import { InternModel } from '../Models/intern.model';
import { LoggedInUserModel } from '../Models/loggedUser.model';
import { RegisterInternService } from '../Services/registerIntern.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

intern:InternModel
loggedInUser:LoggedInUserModel
status: boolean;
constructor(private internRegisterService:RegisterInternService, private router:Router){
  this.intern = new InternModel();
  this.loggedInUser = new LoggedInUserModel();
  this.status = false;
}
  addIntern(){
    console.log(this.intern.name)
    this.internRegisterService.registerIntern(this.intern).subscribe(data=>{
      this.loggedInUser = data as LoggedInUserModel;
      localStorage.setItem("token", this.loggedInUser.token);
      console.log(this.loggedInUser);
      alert(`\t ........Registration successfull........
        \n your user id is : ${this.loggedInUser.userId} and your password is first 4 letters of your name + your birth date and month `);
       this.router.navigateByUrl('intern')
    },
    err=>{
      console.log(err)
    });
   }
  }


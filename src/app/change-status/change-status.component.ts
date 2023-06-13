import { Component } from '@angular/core';
import { UserModel } from '../Models/user.model';
import { AdminService } from '../Services/adminService.services';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css']
})
export class ChangeStatusComponent {
   userModel : UserModel;
   constructor(private adminService : AdminService)
   {
     this.userModel = new UserModel;
   }

   approve()
   {
     this.adminService.changeStatus(this.userModel).subscribe(data=>
      {
        this.userModel = data as UserModel;
        alert('Approved')
      },
      err=>
      {
         console.log(err);  
      });
   }
}

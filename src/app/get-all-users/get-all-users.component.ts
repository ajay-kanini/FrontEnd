import { Component } from '@angular/core';
import { InternModel } from '../Models/intern.model';
import { AdminService } from '../Services/adminService.services';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent {
     internModel:InternModel[];
     constructor(private adminService:AdminService)
     {
       this.adminService.GetAllUsersService().subscribe(data=>
        {
          this.internModel=data as InternModel[];
        },
        err=>
        {
          console.log(err);
        });
     }
}

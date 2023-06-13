import { Component } from '@angular/core';
import { LogDetailsModel } from '../Models/logDetails.models';
import { AdminService } from '../Services/adminService.services';

@Component({
  selector: 'app-get-logs',
  templateUrl: './get-logs.component.html',
  styleUrls: ['./get-logs.component.css']
})
export class GetLogsComponent {
logModel : LogDetailsModel[];
constructor(private adminService : AdminService)
{
  this.adminService.getLog().subscribe(data=>
    {
      this.logModel = data as LogDetailsModel[];
      console.log(this.logModel);
    },
    err=>
    {
      console.log(err);
    });

}

}

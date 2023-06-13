import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogDetailsModel } from './Models/logDetails.models';
import { InternService } from './Services/internService.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InternManagement';
  logModel : LogDetailsModel
  constructor(private router:Router, private internService : InternService)
  {
    this.logModel = new LogDetailsModel();
    this.router.navigateByUrl('login');  
  }
  
  getLog()
  {
    this.logModel.logInTime = sessionStorage.getItem("loginTime")!.toString()
    this.logModel.logOutTime = new Date().toString();
    var id = localStorage.getItem("id");
    this.logModel.internId = Number(id);
    this.internService.addLog(this.logModel).subscribe(data =>
      {
        this.logModel = data as LogDetailsModel;
        console.log(this.logModel)
      },
      err =>
      {
        console.log(err)
      }
    )
  }
}


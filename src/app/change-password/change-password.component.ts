import { Component } from '@angular/core';
import { changePasswordDTO } from '../Models/changePasswordDTO.models';
import { InternService } from '../Services/internService.services';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePasswordModel : changePasswordDTO;
  constructor(private internService : InternService)
  {
      this.changePasswordModel = new changePasswordDTO();
      var id = localStorage.getItem("id");
      this.changePasswordModel.UserId=Number(id);
  }

  changePassword()
  {
    this.internService.changePasswordService(this.changePasswordModel).subscribe(data=>
      {
        this.changePasswordModel = data as changePasswordDTO;
        alert('password updated successfully')
      },
      err=>
      {
          console.log(err);
      });
  }

}

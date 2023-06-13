import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css']
})
export class InternComponent {

  constructor(private router : Router)
  {

  }
  password()
  {
    this.router.navigateByUrl("changePassword");
  }

  ticket()
  {
    this.router.navigateByUrl("ticket");
  }
}

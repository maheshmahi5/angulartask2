import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {


search: any;
search1: any ;
view;
prflid = this.ser.prflid;
  constructor(public ser: AppService, public router: Router) { }
  ngOnInit() {
    this.rm1();
    this.hr1();
  }
  rmData;
  hrData;


  // to get the employees whose role is rm
  rm1() {
    this.ser.role("rm").subscribe(arg => {
      this.rmData = arg;
      console.log(arg)
    });
  }

  //to get the employees whose role is hr
  hr1() {
    this.ser.role("hr").subscribe(arg => {
      this.hrData = arg;
      console.log(this.hrData)
    });
  }

  // to change the role of employee whose role is rm 
  chngrolerm() {
    this.view = true;
    this.ser.id = this.view;
    this.router.navigate(['multi',"rm"]);
  }

  // to change the role of employee whoe role is hr
  chngrolehr() {
    this.view = false;
    this.ser.id = this.view;
    this.router.navigate(['multi',"hr"]);
  }

  //to navigate to last seen page
  back()
  {
    this.router.navigate(['page3',this.prflid]);
  }


}

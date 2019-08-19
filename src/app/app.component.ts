import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app/app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(public Router:Router , public ser:AppService) {

  }

  ngOnInit(){


  }

  // navigates to login page
  // page1() {
  //   this.view =false;
  //   this.view1 =true;
  //   this.Router.navigate(['page1']);
  // }
// navigates to sign up page
  // page2() {
  //   this.view1 = false;
  //   this.view =true;
  //   this.Router.navigate(['page2']);
  // }
}

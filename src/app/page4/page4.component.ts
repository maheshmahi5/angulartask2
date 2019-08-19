import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {
prflid ;
abc : any =[];
id : any;

  constructor( public ser: AppService ,public Route: ActivatedRoute, public Router:Router ) { }

  ngOnInit() {
    this.Route.paramMap.subscribe((params: ParamMap) => {

    //getting id by using params

       this.id = parseInt(params.get('id'));
      this.viewdata(this.id);
      console.log(this.id);
      this.prflid = this.ser.prflid;
      console.log(this.ser.prflid)
    });
  }
//  details of particular id
  viewdata(id) {
      this.ser.editandprflview(id).subscribe(data2 => {
        this.abc = data2[0];
        console.log(data2);
      });
    }

// to navigate to back page
back() {
  this.Router.navigate(['page3',this.prflid]);
}



}

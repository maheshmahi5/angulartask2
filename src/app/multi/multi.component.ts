import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.scss']
})
export class MultiComponent implements OnInit {

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  show: any = false;
  rol;
  result: any = [];
  emp_id: any = [];
  emp_username: any = [];
  emp_role: any = [];
  del_emp_role: any = [];
  all_emp_role: any = [];
  all_emp_id: any = [];
  key = 'example';

  constructor(public ser: AppService, public Router: Router, public Route: ActivatedRoute) { }

  ngOnInit() {

    this.Route.paramMap.subscribe((params: ParamMap) => {
      const data = params.get("data")
      this.rol = data;
      console.log(data, "log params");
      this.allrolesdata(data);

    });
  }



  // for getting all users data
  allrolesdata(role) {
    this.ser.role('user').subscribe((arg: any) => {
      this.dropdownList = [];
      this.selectedItems = [];
      console.log(arg, "arg");

      for (const row of arg) {
        // console.log(row, "row");

        // assigning the data to new variables
        const newRow = {
          "id": row.emp_id,
          "itemName": row.Username,
          "role": row.role
        };

        // pushing the object into dropdown list
        this.dropdownList.push(newRow);

        // selecting the items if it includes the role
        if (row.role.includes(role)) {
          this.selectedItems.push(newRow);
        }
      }

      // plucking the data into arrays using object keys

      console.log(this.selectedItems);
      console.log(this.dropdownList);
      this.emp_username = _.pluck(this.selectedItems, 'itemName');
      this.emp_id = _.pluck(this.selectedItems, 'id');
      console.log(this.emp_id);
      console.log(this.emp_username);
      this.emp_role = _.pluck(this.selectedItems, 'role');
      console.log(this.emp_role);

      // dropdown list settings

      this.dropdownSettings = {
        text: "Role management",
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        enableSearchFilter: true,
        classes: "myclass custom-class"
      };
      this.show = true;
    });
  }
  // for getting selected items data

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
    this.emp_username = _.pluck(this.selectedItems, 'itemName');
    this.emp_id = _.pluck(this.selectedItems, 'id');
    console.log(this.emp_id);
    console.log(this.emp_username);
    this.emp_role = _.pluck(this.selectedItems, 'role');
    console.log(this.emp_role);
  }

  // for unselect operation

  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
    this.emp_username = _.pluck(this.selectedItems, 'itemName');
    this.emp_id = _.pluck(this.selectedItems, 'id');
    console.log(this.emp_id);
    console.log(this.emp_username);
    this.emp_role = _.pluck(this.selectedItems, 'role');
    console.log(this.emp_role);
  }

  //for select all operation

  onSelectAll(items: any) {
    console.log(items);
    this.emp_username = _.pluck(this.selectedItems, 'itemName');
    this.emp_id = _.pluck(this.selectedItems, 'id');
    console.log(this.emp_id);
    console.log(this.emp_username);
    this.emp_role = _.pluck(this.selectedItems, 'role');
    console.log(this.emp_role);
  }

  // for unselect all operation

  onDeSelectAll(items: any) {
    console.log(items);
    this.emp_username = _.pluck(this.selectedItems, 'itemName');
    this.emp_id = _.pluck(this.selectedItems, 'id');
    console.log(this.emp_id);
    console.log(this.emp_username);
    this.emp_role = _.pluck(this.selectedItems, 'role');
    console.log(this.emp_role);
  }
  // for navigating to back page
  back() {
    this.Router.navigate(['role']);
  }


  // for sending data after change of role
  submit() {
    this.all_emp_role = [];
    this.result = [];
    this.del_emp_role = [];
    this.all_emp_id = [];

    this.all_emp_role = _.pluck(this.dropdownList, 'role');
    console.log(this.all_emp_role);
    this.all_emp_id = _.pluck(this.dropdownList, 'id');
    console.log(this.all_emp_id);
    console.log(this.emp_id);
    console.log(this.emp_role);

    //deleting the particular role to all employees
    _.each(this.all_emp_role, arg => {
      arg = arg.split(",");
      let set = _.reject(arg, n => {
        return n == this.rol
      });
      this.del_emp_role.push(set.join(","));
    });
    console.log(this.del_emp_role);

    //adding the role to particular employees
    _.each(this. emp_id, arg => {
      this.del_emp_role[_.indexOf(this.all_emp_id, arg)] = this.del_emp_role[_.indexOf(this.all_emp_id, arg)] + "," + this.rol;

    });
    console.log(this.del_emp_role);
    console.log(this.all_emp_id);

    // making the emp_id and roles into object

    for (let i = 0; i < this.all_emp_id.length; i++) {
      var obj = {};
      obj['emp_id'] = this.all_emp_id[i];
      obj['role'] = this.del_emp_role[i];
      this.result.push(obj);
    }

    console.log(this.result);

    
    const encryptedroledata = CryptoJS.AES.encrypt(JSON.stringify(this.result), this.key).toString();
    console.log(encryptedroledata);


    this.ser.updaterole(encryptedroledata).subscribe( );

    this.Router.navigate(['role']);



}
}

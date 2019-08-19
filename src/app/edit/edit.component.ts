import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { IMyDpOptions } from 'mydatepicker';
import * as moment from 'moment';
import * as _ from 'underscore';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  registerForm: FormGroup;
  regForm: FormGroup;
  view = this.ser.id;
  prflid  = this.ser.prflid;
  phone_no: any = [];
  num: any;
  phno: any;
  id: any;
  data: any = [];
  constructor(public formbuilder: FormBuilder, public router: Router, public Route: ActivatedRoute, public ser: AppService) { }
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  }
  
  ngOnInit() {

    this.registerForm = this.formbuilder.group({

      Username: ['', [Validators.required, Validators.minLength(4)]],
      First_name: ['', [Validators.required, Validators.minLength(4)]],
      Last_name: ['', [Validators.required, Validators.minLength(4)]],
      myDate: [, [Validators.required]],
      phone_no: this.formbuilder.array([ this.createNumber() ], [Validators.required]),
      dept_id: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });


    this.regForm = this.formbuilder.group({

      dept_name: ['', [Validators.required]],
      status: ['', [Validators.required]]
    })
    this.Route.paramMap.subscribe((params: ParamMap) => {
      var i = parseInt(params.get("id"));
      console.log(i);
      this.id = i;
      console.log(this.id);
      this.deptedit(i) ;
      this.editemply(this.id);

    });
  }
  createNumber(): FormGroup {
    return this.formbuilder.group({
      number: [[], [Validators.required, Validators.pattern( '^[6-9][0-9]{9}$')]],
    });
  }
  addphno(): void {
    this.phone_no = this.registerForm.get('phone_no') as FormArray;
    this.phone_no.push(this.createNumber());
    console.log(this.phone_no.value);
  }
  delete(index: any) {
    this.phone_no.removeAt(index);
  }
// for dept edit
  deptedit(i) {
    console.log(i);
    this.ser.editDept(i).subscribe(data1 => {
      this.data = data1;
      console.log(data1);

      // for taking the values from the form
      this.regForm.patchValue({

        dept_name: this.data[0].dept_name,

        status: this.data[0].status.toString()
      });
    });
  }

// for employee edit function
editemply(i) {
    this.ser.editandprflview(i).subscribe(arg => {
      this.data = arg;
      console.log(this.data[0].id)
      console.log(this.data[0].phone_no.split(","));

      if (this.data.length > 0) {
  // for taking the values from the form
   this.num = this.data[0].phone_no.split(",")
  console.log(this.num);

   for (let i = 0 ; i < this.num.length - 1; i++) {
    this.addphno();
  }
   this.registerForm.patchValue({

    Username: this.data[0].Username,
    First_name: this.data[0].First_name,
    Last_name: this.data[0].Last_name,
    myDate :  {
      formatted: moment(this.data[0].dob).format('YYYY-MM-DD')
    },
    dept_id: this.data[0].dept_id,
    status: this.data[0].status.toString(),
    phone_no : _.map(this.num, (arg: any) => {
        return {number: arg};
      })

  });
   }
    });

  }

  // to perform update func on dept table
  updDept(data1) {
    const id1 = this.id
    console.log(data1);
    console.log(id1);
    this.ser.updateDept(data1, id1).subscribe(res => {
    this.router.navigate(['page3', this.prflid]);
    });
  }

  // to perform update func on login table
  updEmp(data1) {
    console.log(data1);
    this.phno = _.pluck(data1["phone_no"], 'number').join(",");
    console.log(this.phno);
    data1["phone_no"] = this.phno
    console.log(data1);

    this.ser.updateEmp(data1, this.data[0].id).subscribe( arg =>
      {
        console.log(arg);
        this.router.navigate(['page3', this.prflid]);
      });
    
  }

  // to navigate to page3
  close() {
    console.log(this.prflid);
    this.router.navigate(['page3', this.prflid]);
  }

}
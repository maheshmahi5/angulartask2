import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { IMyDpOptions, IMyDefaultMonth } from 'mydatepicker';
import * as _ from 'underscore';
import * as moment from 'moment';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(public formbuilder: FormBuilder, public ser: AppService, public router: Router) { }
  view = this.ser.id;
  registerForm: FormGroup;
  regForm: FormGroup;
  phone_no: any;
  date: any;
  phno: any = [];
  prflid: any;
  birth: any;
  end: any;
  date2: any = {};
  date1: any = {};
  max = 2;
  min = 0;
  key = 'example';

  private today = new Date();
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    disableWeekends: true,
    dateFormat: 'yyyy-mm-dd',
    disableSince: { year: this.today.getFullYear() - 18, month: this.today.getMonth() + 1, day: this.today.getDate() + 1 }

  };

  private defaultMonth: IMyDefaultMonth = {
    defMonth: `${this.today.getFullYear() - 18}/ ${this.today.getMonth() + 1}`
  }

  public myjoinDatePickerOptions: IMyDpOptions = {
    // other options...

    dateFormat: 'yyyy-mm-dd',
    disableWeekends: true,
    disableUntil: { year: this.date1.year, month: this.date1.month, day: this.date1.day },
    disableSince: { year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() + 1 }
  };

  ngOnInit() {

    // form validators
    this.registerForm = this.formbuilder.group({

      Username: ['', [Validators.required, Validators.minLength(4)]],
      First_name: ['', [Validators.required, Validators.minLength(4)]],
      myDate: [, [Validators.required]],
      joinDate: [, [Validators.required]],
      Last_name: ['', [Validators.required, Validators.minLength(4)]],
      phone_no: this.formbuilder.array([this.createNumber()], [Validators.required]),
      password: ['', [Validators.required, Validators.minLength(6)]],
      Confirm_password: ['', [Validators.required]],
      dept_id: ['', [Validators.required]],
    });
    this.regForm = this.formbuilder.group({

      dept_name: ['', [Validators.required, Validators.minLength(2)]],
      status: ['', [Validators.required]]
    });
    this.prflid = this.ser.prflid;
  }

  createNumber(): FormGroup {
    return this.formbuilder.group({
      number: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
    });
  }

  birt() {
    this.birth = this.registerForm.get('myDate');
    this.date1 = this.birth.value.formatted;
    console.log(this.date1);
    this.myjoinDatePickerOptions.disableUntil = { year: this.date1.year, month: this.date1.month, day: this.date1.day };

  }

  addphno() {
    this.phone_no = this.registerForm.get('phone_no') as FormArray;
    console.log(this.phone_no.value);
    this.phone_no.push(this.createNumber());
  }

  delete(index) {
    this.phone_no.removeAt(index);
  }




  // submit function to add into login page
  addata(data) {
    this.date = this.registerForm.get('joinDate');
    this.date = this.date.value.formatted;
    console.log(data);
    this.phno = _.pluck(data["phone_no"], 'number').join(",");
    console.log(this.phno);
    data["phone_no"] = this.phno;
    data['myDate'] = this.date1;
    data['joinDate'] = this.date;
    console.log(data);
    console.log(this.registerForm.status);

    const encryptedinsertdata = CryptoJS.AES.encrypt(JSON.stringify(data), this.key).toString();
    console.log(encryptedinsertdata);

    this.ser.insertintoemploy(encryptedinsertdata).subscribe(arg => {
      alert('Now You can sign in');
      this.registerForm.reset();
    }, error => {
      alert('Existing username && Try Another Username');
    }
    );
  }

  // submit button func to add data into dept table
  submit(data) {

    let status = parseInt(data['status'])
    console.log(status);
    data['status'] = status;
    console.log(data);

    const encryptedinsertdata = CryptoJS.AES.encrypt(JSON.stringify(data), this.key).toString();
    console.log(encryptedinsertdata);

    this.ser.insertintodept(encryptedinsertdata).subscribe(arg => {
      alert('Data Inserted Successfully');
      this.regForm.reset();
    });
  }

  // close btn func to navigate to login page
  close() {
    this.ser.id = false;
    this.router.navigate(['page3', this.prflid]);
  }

  random() {
    console.log(this.min);
    console.log(this.max);
    this.end = this.registerForm.get('joinDate');
    this.date2 = this.end.value.jsdate;
    console.log(this.date1);
    console.log(this.date2);

    let randno = Math.floor((Math.random() * (this.max - this.min) + this.min));
    console.log(randno)

    let d = this.date1.getTime() + Math.random() * (this.date2.getTime() - this.date1.getTime());
      // month = '' + (d.getMonth()),
      // day = '' + d.getDate()

    // if (month.length < 2) month = '0' + month;
    // if (day.length < 2) day = '0' + day;
    console.log(d);
    console.log("org date ", moment(d).format("YYYY:MM:DD"))

    // var s = d.setDate(d.getDate() + randno);
    // console.log(moment(s).utc().weekday());
    // console.log(moment(s).utc());
    // if (moment(s).utc().weekday() == 0) {
    //   this.random();
    // }
    // else {
    //   console.log(s);
    //   console.log("after random ", moment(s).format("YYYY:MM:DD"));
    // }
  }

}

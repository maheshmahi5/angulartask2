import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  constructor( public formbuilder: FormBuilder, public router: Router , public ser: AppService) { }

 view = this.ser.view;
  registerForm: FormGroup;
data;
key = 'example';

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      Username: ['umamahesh', [Validators.required]],
      password: ['mahi005', [Validators.required]]
    });
  }

//  to sign in func
  signin(item) {
    console.log(item);
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(item), this.key).toString();
    console.log(encrypted);

    // return CryptoJs.AES.encrypt(JSON.stringify(text),key).toString();


    this.ser.getdata(encrypted).subscribe(arg => {
        this.data = arg;
        console.log(this.data, "response");
        // getting id from backend into data

        // tslint:disable-next-line: triple-equals
        if (this.data.length != 0) {
          const role = btoa(this.data[0].role);
          console.log(role);
          const key = 'roles';
          localStorage.setItem(key, role);
          const userRoles = atob(localStorage.getItem('roles'));
          console.log(userRoles);
          this.router.navigate(['page3', this.data[0].id]);

          } else {
         // if the username and password doesnt match
         alert('invalid username and password');
        // to clear the form
         this.registerForm.reset();
      }
       }
       // if there is an invalid username
      ,error => {
        alert("invalid username and password");
        this.registerForm.reset();
    });
  }
  }

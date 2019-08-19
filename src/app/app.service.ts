import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
prflid;
id;
myurl = 'http://192.168.2.207:3000/';
view = true;
  constructor(public http: HttpClient) { }

  // get data from emp table for password checking
  getdata(items): Observable<any> {
    return this.http.post(`${this.myurl}api/login/items`, {edc: items});
  }

  // inserting the data into employee table
  insertintoemploy(i): Observable<any> {
    return this.http.post(`${this.myurl}api/login`, i);
  }

  // inserting the data into dept table
  insertintodept(i): Observable<any> {
    return this.http.post(`${this.myurl}dept/insert`, i);
  }

 // viewing login profile and for edit of particular id
  editandprflview(id): Observable<any> {
      return this.http.get(`${this.myurl}login/${id}`);
  }

// getting dept table
  private data1: string = `${this.myurl}api/dept`;
  deptdata(): Observable<any> {
    return this.http.get<any>(this.data1);
  }

  // deleting data in the dept table by particular id
  delDept(id): Observable<any> {
     return this.http.post(`${this.myurl}api/dept/del`, id);
  }

 // updating the department data by particular id
  updateDept(i, id): Observable<any> {
    return this.http.post(`${this.myurl}api/dept/${id}`, i);
  }

  // for department edit func
  editDept(id) {
    return this.http.get(`${this.myurl}api/depts/${id}`);
  }

  // getting emp table
  emptablData() {
    return this.http.get(`${this.myurl}logintabl`);
  }

    // getting emp table
    task() {
      return this.http.get(`${this.myurl}task`);
    }
  // updating login data by using id
  updateEmp(i, id): Observable <any> {
    return this.http.post(`${this.myurl}api/login/upd/${id}`, i);
  }

  // deleting the data from emp table
  delEmp(id): Observable<any> {
    return this.http.post(`${this.myurl}login/del`, id);
  }

  // getting role management data
  role(data)  {
    return this.http.get(`${this.myurl}role/${data}`);
  }

  // updating the role management
  updaterole(id) {
    return this.http.post(`${this.myurl}api/role/update`, id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrls: ['./employeeedit.component.css']
})
export class EmployeeeditComponent implements OnInit {
  fname:any;
  lname:any;
  city:any;
  country:any;
  state:any;
  pincode:any;
  street:any;
  mobile:any;
  uname:any;


  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fname = sessionStorage.getItem("fname");
    this.lname = sessionStorage.getItem("lname");
    this.city = sessionStorage.getItem("city");
    this.street = sessionStorage.getItem("street");
    this.state = sessionStorage.getItem("state");
    this.pincode = sessionStorage.getItem("pincode");
    this.mobile = sessionStorage.getItem("mobile");
    this.country = sessionStorage.getItem("country");
  }

  update() {
    this.uname = sessionStorage.getItem('uname');
    var emp = {
      uname: this.uname, fname: this.fname, lname: this.lname,
      street: this.street, city: this.city, state: this.state,
      pincode: this.pincode, country: this.country, mobile: this.mobile
    }
    this.http.post('http://localhost:3000/empedit',emp).subscribe((data:any) => {
      this.fname = data['SOAP:Envelope']['SOAP:Body']['ns0:ZEMP_PROFILE_EDIT.Response'].VORNA._text;
      this.lname = data['SOAP:Envelope']['SOAP:Body']['ns0:ZEMP_PROFILE_EDIT.Response'].NACHN._text;
      this.city = data['SOAP:Envelope']['SOAP:Body']['ns0:ZEMP_PROFILE_EDIT.Response'].ORT01._text;
      this.country = data['SOAP:Envelope']['SOAP:Body']['ns0:ZEMP_PROFILE_EDIT.Response'].NATIO._text;
      this.state = data['SOAP:Envelope']['SOAP:Body']['ns0:ZEMP_PROFILE_EDIT.Response'].LAND._text;
      this.street = data['SOAP:Envelope']['SOAP:Body']['ns0:ZEMP_PROFILE_EDIT.Response'].STRAS._text;
      this.mobile = data['SOAP:Envelope']['SOAP:Body']['ns0:ZEMP_PROFILE_EDIT.Response'].TELNR._text;
      this.pincode = data['SOAP:Envelope']['SOAP:Body']['ns0:ZEMP_PROFILE_EDIT.Response'].PSTLZ._text;
      //  console.log(this.lname);
    })
    this.router.navigate(['/eprofile']);
  }


}

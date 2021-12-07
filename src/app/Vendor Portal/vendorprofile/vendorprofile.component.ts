import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.css']
})
export class VendorprofileComponent implements OnInit {
  fname:any;
  lname:any;
  city:any;
  address:any;
  district:any;
  pincode:any;
  country:any;
  telephone:any;
  uname:any;


  constructor(private http: HttpClient, private router: Router) {
    this.uname = sessionStorage.getItem('uname');
    //alert(this.uname);
    if (this.uname == null) {
      // alert('hello');
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
    // this.uname = localStorage.getItem('uname');


    this.http.post('http://localhost:3000/profilev', { uname: this.uname }).subscribe((data:any) => {
    console.log(data); 
    this.fname = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_KNH.Response']['E_IT_OUTPUT'].NAME._text;
      this.lname = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_KNH.Response']['E_IT_OUTPUT'].LNAME._text;
      this.address = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_KNH.Response']['E_IT_OUTPUT'].ADDRESS._text;
      this.city = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_KNH.Response']['E_IT_OUTPUT'].CITY._text;
      this.district = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_KNH.Response']['E_IT_OUTPUT'].DISTRICT._text;
      this.pincode = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_KNH.Response']['E_IT_OUTPUT'].PINCODE._text;
      this.country = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_KNH.Response']['E_IT_OUTPUT'].COUNTRY._text;
      this.telephone= data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_KNH.Response']['E_IT_OUTPUT'].TELEPHONE._text;
     
     
      sessionStorage.setItem("fname", this.fname);
      sessionStorage.setItem("lname", this.lname);
      sessionStorage.setItem("address", this.address);
      sessionStorage.setItem("city", this.city);
      sessionStorage.setItem("district", this.district);
      sessionStorage.setItem("pincode", this.pincode);
      sessionStorage.setItem("country", this.country);
      sessionStorage.setItem("telephone", this.telephone);
      
    })
   
      // console.log(this.fname);
   
  }  

  

}

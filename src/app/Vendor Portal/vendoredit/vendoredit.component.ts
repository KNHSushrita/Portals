import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendoredit',
  templateUrl: './vendoredit.component.html',
  styleUrls: ['./vendoredit.component.css']
})
export class VendoreditComponent implements OnInit {
  
  fname:any;
  lname:any;
  city:any;
  address:any;
  district:any;
  country:any;
  pincode:any;
  telephone:any;
  uname:any;
  a:any;
  b:any;
  c:any;
  d:any;
  e:any;
  f:any;
  g:any;
  h:any;


  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.fname = sessionStorage.getItem("fname");
    this.lname = sessionStorage.getItem("lname");
    this.address = sessionStorage.getItem("address");
    this.city = sessionStorage.getItem("city");
    this.district= sessionStorage.getItem("district");
    this.pincode = sessionStorage.getItem("pincode");
    this.country = sessionStorage.getItem("country");
    this.telephone = sessionStorage.getItem("telephone");
    this.a=this.fname;
    this.b=this.lname;
    this.c=this.address;
    this.d=this.city;
    this.e=this.district;
    this.f=this.pincode;
    this.g=this.country;
    this.h=this.telephone;
    console.log(this.b);
  }

  update() {
    this.uname = sessionStorage.getItem('uname');
    var ven_details = {
      uname: this.uname, fname: this.fname, lname: this.lname,
      address: this.address,city: this.city, district: this.district, 
      pincode: this.pincode, country: this.country,telephone: this.telephone
    }
    this.http.post('http://localhost:3000/editv', ven_details).subscribe((data:any) => {
      this.uname=data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_UPDATE_AKR.Response'].VENDOR;
      this.fname = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_UPDATE_AKR.Response'].NAME;
      this.lname = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_UPDATE_AKR.Response'].LNAME;
      this.address = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_UPDATE_AKR.Response'].ADDRESS;
      this.city = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_UPDATE_AKR.Response'].CITY;
      this.district= data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_UPDATE_AKR.Response'].DISTRICT;
      this.pincode= data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_UPDATE_AKR.Response'].PINCODE;
      this.country = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_UPDATE_AKR.Response'].COUNTRY;
      this.telephone = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VEN_DETAILS_UPDATE_AKR.Response'].TELEPHONE;
      // console.log(this.lname);
    })
    console.log(this.b);
    console.log(this.lname);
    if(this.a==this.fname&&this.b==this.lname&&this.c==this.address&&this.d==this.city&&this.e==this.district
      &&this.f==this.pincode&&this.g==this.country&&this.h==this.telephone){
        alert("No Changes made"); 
      }
    else{
      
      alert("Changes saved successfully");
    }
    this.router.navigate(['/profilev']);
  }

}

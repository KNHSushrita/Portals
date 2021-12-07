import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Component, ElementRef, ViewChild ,OnInit} from '@angular/core';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-goodsreceipt',
  templateUrl: './goodsreceipt.component.html',
  styleUrls: ['./goodsreceipt.component.css']
})
export class GoodsreceiptComponent implements OnInit {
  uname:any;
  head:any;
  item:any;
  header:any;
  loader:any;
  goodsh:any;
  goodsi:any;
  // headval:any;

  filtereddata:any;

 
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
     this.header=true;
     this.uname = sessionStorage.getItem("uname");
     
     this.http.post('http://localhost:3000/goods', { uname: this.uname }).subscribe((data:any) => {
       console.log(data);
       this.goodsh = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_GOODS_RECEIPT_KNH.Response']['IT_GN_HEADER']['item'].slice(1);
       this.goodsi = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_GOODS_RECEIPT_KNH.Response']['IT_GN_ITEMS']['item'];
       this.goodsh.slice(1);
       this.loader=false;
     })
   }  
showitem(headval:any){
  this.header=false;
  console.log(headval);
  this.filtereddata=this.goodsi.filter((x:any)=>x.MAT_DOC._text==headval);
  this.loader=false;
}
 
goback(){
  this.header=true;
}
@ViewChild('pdfTable')
pdfTable!: ElementRef;

 downloadAsPDF() {
  const pdfTable = this.pdfTable.nativeElement;
  var html = htmlToPdfmake(pdfTable.innerHTML);
  const documentDefinition = { content: html };
  pdfMake.createPdf(documentDefinition).download(); 
   
}

}

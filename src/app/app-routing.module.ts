import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditdebitComponent } from './Customer Portal/creditdebit/creditdebit.component';
import { CustomerdetailComponent } from './Customer Portal/customerdetail/customerdetail.component';
import { CustomereditComponent } from './Customer Portal/customeredit/customeredit.component';
import { DashboardComponent } from './Customer Portal/dashboard/dashboard.component';
import { DeliverygetComponent } from './Customer Portal/deliveryget/deliveryget.component';
import { GetpaymentagingComponent } from './Customer Portal/getpaymentaging/getpaymentaging.component';
import { InquiryComponent } from './Customer Portal/inquiry/inquiry.component';
import { InvoiceComponent } from './Customer Portal/invoice/invoice.component';
import { LoginComponent } from './Customer Portal/login/login.component';
import { MasterdataComponent } from './Customer Portal/masterdata/masterdata.component';
import { OverallsalesComponent } from './Customer Portal/overallsales/overallsales.component';
//vendor portal
import { DashboardvComponent } from './Vendor Portal/dashboardv/dashboardv.component';
import { SalesorderdataComponent } from './Customer Portal/salesorderdata/salesorderdata.component';
import { CreditmemoComponent } from './Vendor Portal/creditmemo/creditmemo.component';
import { DebitmemoComponent } from './Vendor Portal/debitmemo/debitmemo.component';
// import { DetailsComponent } from './Vendor Portal/details/details.component';
// import { DetailsupdateComponent } from './Vendor Portal/detailsupdate/detailsupdate.component';
import { VendorprofileComponent } from './Vendor Portal/vendorprofile/vendorprofile.component';
import { VendoreditComponent } from './Vendor Portal/vendoredit/vendoredit.component';
import { GoodsreceiptComponent } from './Vendor Portal/goodsreceipt/goodsreceipt.component';
import { InvoiceeComponent } from './Vendor Portal/invoicee/invoicee.component';
import { LoginvComponent } from './Vendor Portal/loginv/loginv.component';
// import { SuccessloginComponent } from './Vendor Portal/successlogin/successlogin.component';
// import { ErrorloginComponent } from './Vendor Portal/errorlogin/errorlogin.component';
import { PaymentagingComponent } from './Vendor Portal/paymentaging/paymentaging.component';
import { PurchaseorderComponent } from './Vendor Portal/purchaseorder/purchaseorder.component';
import { RequestquotationComponent } from './Vendor Portal/requestquotation/requestquotation.component';
import { LandingComponent } from './Landing Page/landing/landing.component';
import { MainlandingComponent } from './mainlanding/mainlanding.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MastComponent } from './mast/mast.component';

//Employee Portal
import { EmployyeloginComponent } from './Employee Portal/employyelogin/employyelogin.component';
import { EmployeeDashboardComponent } from './Employee Portal/employee-dashboard/employee-dashboard.component';
import { EmployeeeditComponent } from './Employee Portal/employeeedit/employeeedit.component';
import { EmployeeprofileComponent } from './Employee Portal/employeeprofile/employeeprofile.component';
import { FinalsetComponent } from './Employee Portal/finalset/finalset.component';
import { LeavedetailsComponent } from './Employee Portal/leavedetails/leavedetails.component';
import { LeaverequestComponent } from './Employee Portal/leaverequest/leaverequest.component';
import { PayslipComponent } from './Employee Portal/payslip/payslip.component';
import { PayslippdfComponent } from './Employee Portal/payslippdf/payslippdf.component';
import { FinalsettComponent } from './Employee Portal/finalsett/finalsett.component';
import { LeavereqComponent } from './Employee Portal/leavereq/leavereq.component';
// import { LeavetypeComponent } from './Employee Portal/leavetype/leavetype.component';


const routes: Routes = [
  
  {path:'',component:MainlandingComponent},
  {path:'landing',component:LandingComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'customerdetail',component:CustomerdetailComponent},
  {path:'customeredit',component:CustomereditComponent},
  {path:'inquiry',component:InquiryComponent},
  {path:'salesorder',component:SalesorderdataComponent},
  {path:'delivery',component:DeliverygetComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'getpayment',component:GetpaymentagingComponent},
  {path:'creditdebit',component:CreditdebitComponent},
  {path:'overallsales',component:OverallsalesComponent},
  {path:'masterdata',component:MasterdataComponent},


  //vendor portal
  {path:'loginv',component:LoginvComponent},
  // {path:'sloginv',component:SuccessloginComponent},
  // {path:'eloginv',component:ErrorloginComponent},
  {path:'dashboardv',component:DashboardvComponent},
  {path:'creditmemo',component:CreditmemoComponent},
  {path:'debitmemo',component:DebitmemoComponent},
  // {path:'details',component:DetailsComponent},
  // {path:'detailsupdate',component:DetailsupdateComponent},
  {path:'profilev',component:VendorprofileComponent},
  {path:'editv',component:VendoreditComponent},
  {path:'goods',component:GoodsreceiptComponent},
  {path:'invoicee',component:InvoiceeComponent},
  {path:'payment',component:PaymentagingComponent},
  {path:'purchase',component:PurchaseorderComponent},
  {path:'request',component:RequestquotationComponent},
  {path:'mast',component:MastComponent},

  //Employee Portal
  {path:'logine',component:EmployyeloginComponent},
  {path:'dashboarde',component:EmployeeDashboardComponent},
  {path:'eprofile',component:EmployeeprofileComponent},
  {path:'empedit',component:EmployeeeditComponent},
  {path:'finalset',component:FinalsetComponent},
  {path:'leavedetails',component:LeavedetailsComponent},
  {path:'leaverequest',component:LeaverequestComponent},
  {path:'payslip',component:PayslipComponent},
  {path:'payslippdf',component:PayslippdfComponent},
  {path:'finalsett',component:FinalsettComponent},
  {path:'leavereqq',component:LeavereqComponent},
  // {path:'leavetype',component:LeavetypeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

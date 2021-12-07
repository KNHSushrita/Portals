import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from'ng2-search-filter';
import { Ng2OrderModule } from'ng2-order-pipe';
import { NgxPaginationModule } from'ngx-pagination';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { DatePipe } from '@angular/common';


import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DataTablesModule } from'angular-datatables';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Customer Portal/login/login.component';
import { DashboardComponent } from './Customer Portal/dashboard/dashboard.component';
import { CreditdebitComponent } from './Customer Portal/creditdebit/creditdebit.component';
import { CustomerdetailComponent } from './Customer Portal/customerdetail/customerdetail.component';
import { CustomereditComponent } from './Customer Portal/customeredit/customeredit.component';
import { DeliverygetComponent } from './Customer Portal/deliveryget/deliveryget.component';

import { GetpaymentagingComponent } from './Customer Portal/getpaymentaging/getpaymentaging.component';
import { InquiryComponent } from './Customer Portal/inquiry/inquiry.component';
import { MasterdataComponent } from './Customer Portal/masterdata/masterdata.component';
import { SalesorderdataComponent } from './Customer Portal/salesorderdata/salesorderdata.component';
import { InvoiceComponent } from './Customer Portal/invoice/invoice.component';
import { OverallsalesComponent } from './Customer Portal/overallsales/overallsales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditmemoComponent } from './Vendor Portal/creditmemo/creditmemo.component';
import { DebitmemoComponent } from './Vendor Portal/debitmemo/debitmemo.component';
import { PaymentagingComponent } from './Vendor Portal/paymentaging/paymentaging.component';
// import { DetailsComponent } from './Vendor Portal/details/details.component';
// import { DetailsupdateComponent } from './Vendor Portal/detailsupdate/detailsupdate.component';
import { GoodsreceiptComponent } from './Vendor Portal/goodsreceipt/goodsreceipt.component';
import { PurchaseorderComponent } from './Vendor Portal/purchaseorder/purchaseorder.component';
import { RequestquotationComponent } from './Vendor Portal/requestquotation/requestquotation.component';
import { InvoiceeComponent } from './Vendor Portal/invoicee/invoicee.component';
import { LoginvComponent } from './Vendor Portal/loginv/loginv.component';
import { DashboardvComponent } from './Vendor Portal/dashboardv/dashboardv.component';
import { LandingComponent } from './Landing Page/landing/landing.component';
import { MainlandingComponent } from './mainlanding/mainlanding.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MastComponent } from './mast/mast.component';
import { VendorprofileComponent } from './Vendor Portal/vendorprofile/vendorprofile.component';
import { VendoreditComponent } from './Vendor Portal/vendoredit/vendoredit.component';
import { EmployeeprofileComponent } from './Employee Portal/employeeprofile/employeeprofile.component';
import { EmployeeeditComponent } from './Employee Portal/employeeedit/employeeedit.component';
import { LeaverequestComponent } from './Employee Portal/leaverequest/leaverequest.component';
import { PayslipComponent } from './Employee Portal/payslip/payslip.component';
import { EmployeeDashboardComponent } from './Employee Portal/employee-dashboard/employee-dashboard.component';
import { FinalsetComponent } from './Employee Portal/finalset/finalset.component';
import { LeavedetailsComponent } from './Employee Portal/leavedetails/leavedetails.component';
import { PayslippdfComponent } from './Employee Portal/payslippdf/payslippdf.component';
import { EmployyeloginComponent } from './Employee Portal/employyelogin/employyelogin.component';
// import { SuccessloginComponent } from './Vendor Portal/successlogin/successlogin.component';
// import { ErrorloginComponent } from './Vendor Portal/errorlogin/errorlogin.component';
import { FinalsettComponent } from './Employee Portal/finalsett/finalsett.component';
// import { LeavereqComponent } from './Employee Portal/leavereq.component';
import { LeavereqComponent } from './Employee Portal/leavereq/leavereq.component';
// import { LeavetypeComponent } from './Employee Portal/leavetype/leavetype.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreditdebitComponent,
    CustomerdetailComponent,
    CustomereditComponent,
    DeliverygetComponent,
    
    GetpaymentagingComponent,
    InquiryComponent,
    MasterdataComponent,
    SalesorderdataComponent,
    InvoiceComponent,
    OverallsalesComponent,
    CreditmemoComponent,
    DebitmemoComponent,
    PaymentagingComponent,
    // DetailsComponent,
    // DetailsupdateComponent,
    GoodsreceiptComponent,
    PurchaseorderComponent,
    RequestquotationComponent,
    InvoiceeComponent,
    LoginvComponent,
    DashboardvComponent,
    LandingComponent,
    MainlandingComponent,
    ContactComponent,
    AboutComponent,
    MastComponent,
    VendorprofileComponent,
    VendoreditComponent,
    EmployeeprofileComponent,
    EmployeeeditComponent,
    LeaverequestComponent,
    PayslipComponent,
    EmployeeDashboardComponent,
    FinalsetComponent,
    LeavedetailsComponent,
    PayslippdfComponent,
    EmployyeloginComponent,
    // SuccessloginComponent,
    // ErrorloginComponent,
    FinalsettComponent,
    LeavereqComponent,
    // LeavetypeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    // BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule, 
    FormsModule, 
    
    MatSelectModule,
    MatDatepickerModule,        
    MatNativeDateModule,        
    
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

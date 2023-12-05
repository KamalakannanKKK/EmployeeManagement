import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSelectModule} from '@angular/material/select';

import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeSignUpComponent } from './employee-sign-up/employee-sign-up.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';

import { PasswordchangeComponent } from './passwordchange/passwordchange.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminFPasswordComponent } from './admin-fpassword/admin-fpassword.component';
import { EmpticketviewComponent } from './empticketview/empticketview.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    NavbarComponent,
    RegisteremployeeComponent,
    EditEmpComponent,
    AdminloginComponent,
    AdminSignupComponent,
    EmployeeLoginComponent,
    EmployeeSignUpComponent,
    EmpdetailComponent,
  
    PasswordchangeComponent,
       RaiseTicketComponent,
       ViewTicketComponent,
       WelcomePageComponent,
       FooterComponent,
       UpdateTicketComponent,
       ForgotPasswordComponent,
       AdminFPasswordComponent,
       EmpticketviewComponent,
      
      
      
  ],
  imports: [
    BrowserModule,FormsModule,MatSelectModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

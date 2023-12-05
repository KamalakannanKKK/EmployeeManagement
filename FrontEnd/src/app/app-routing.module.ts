import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeSignUpComponent } from './employee-sign-up/employee-sign-up.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { PasswordchangeComponent } from './passwordchange/passwordchange.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminFPasswordComponent } from './admin-fpassword/admin-fpassword.component';
import { EmpticketviewComponent } from './empticketview/empticketview.component';




const routes: Routes = [
  {
path:'adminLogin',component:AdminloginComponent,
  },{
path:'',component:WelcomePageComponent
}
,{
path:'empdetail',component:EmpdetailComponent
},
{
  path:'login',component:EmployeeLoginComponent
  },{
path:'empticket/:id',component:EmpticketviewComponent
  },

  {
path:'employeesignup',component:EmployeeSignUpComponent
  },{
path:'passwordChange',component:PasswordchangeComponent
  },
  {
    path:'viewticket',component:ViewTicketComponent
      },
  {
    path:'employee',component:EmployeeListComponent
  },{
path:'fpassword',component:ForgotPasswordComponent
  },
  {
    path:'adminfpassword',component:AdminFPasswordComponent
  },
  {
    path:'updateTicket/:id',component:UpdateTicketComponent
  },
  {
    path:'ticketRaise',component:RaiseTicketComponent
  },{
    path:'addemployee',component:RegisteremployeeComponent
  },{
    path:'updateEmp/:id',component:EditEmpComponent
  },{
    path:'signup',component:AdminSignupComponent
  },{
    path:'adminLogin',component:AdminloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

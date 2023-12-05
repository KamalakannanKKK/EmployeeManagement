import { Component } from '@angular/core';
import { EMployee } from '../employee';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
employee=new EMployee();
constructor(private router:Router,private empservice:EmployeeService){};
loginEmployee(form:NgForm){
  console.log(form.value.emailId,form.value.password);
  sessionStorage.setItem('emailId',form.value.emailId)
  sessionStorage.setItem('password',form.value.password);
  this.empservice.loginEmployee(this.employee).subscribe((data:any)=>{
    swal.fire('Success',"LoggedIn Successfully",'success');
    console.log("Response Received");
    this.router.navigate(['/empdetail'])
  },
  (error)=>{
    console.log("Error Happened")
    swal.fire('Error',"Bad Credential",'error');
    
  });
  
    

}}

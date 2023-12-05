import { Component } from '@angular/core';
import { EMployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2'
@Component({
  selector: 'app-employee-sign-up',
  templateUrl: './employee-sign-up.component.html',
  styleUrls: ['./employee-sign-up.component.css']
})
export class EmployeeSignUpComponent {
  employee=new EMployee();
  constructor(private empservice:EmployeeService,private router:Router){}
 
  signupEmployee(form:NgForm){ 
  
    this.empservice.EmployeeSignup(this.employee).subscribe((data)=>{
      console.log("Response Received");
      this.router.navigate(['/login'])
      swal.fire('success',"SignedUp Successfully",'success')
    },
    (error)=>{
      console.log('exception occured');
      swal.fire('error',"Employee with EmailId already exist",'error');
    }
    )
  }
  cancel(){
    this.router.navigate(['/login'])
    swal.fire('warning',"You aren't SignedUp",'warning');
    
  }
}

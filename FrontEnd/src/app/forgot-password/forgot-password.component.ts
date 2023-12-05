import { Component } from '@angular/core';
import { EMployee } from '../employee';
import swal from 'sweetalert2';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  id:Number;password:String
  employee=new EMployee()
constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){

}
ngOnInit(form:NgForm) {
  this.employee = new EMployee();
 this.password=form.value.password
  
  this.employeeService.getempbyEMail(form.value.emailId)
    .subscribe(data => {
      console.log(form.value.password)
      console.log(data)
    if(data!=null){
      this.employee = data;
      this.id=this.employee.id;
      console.log(this.password)
      this.employee.password=this.password;
      this.updateEmployee();
    }
     else{
     swal.fire('error',"Enter Correct Email ID",'error');
     this.router.navigate(['/fpassword'])
     }
    });
}

updateEmployee() {
  console.log(this.id)
  this.employeeService.updateEmployee(this.employee,this.id)
    .subscribe(data => {
      console.log(data);
      this.gotoList();
    }, error => console.log(error));swal.fire('error',"Error Occured",'error')
}
cancel(){
  this.router.navigate(['/login'])
  swal.fire('warning',"Password Not Changed",'warning');
  
}

gotoList() {
  swal.fire('success',"Password Changed Successfully",'success')
  this.router.navigate(['/login']);}

}



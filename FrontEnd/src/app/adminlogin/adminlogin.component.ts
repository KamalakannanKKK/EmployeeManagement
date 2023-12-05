import { Component } from '@angular/core';
import { Admin } from '../admin.model';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'
import swal from 'sweetalert2'
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
admin=new Admin();
constructor(private adminservice:AdminServiceService,private router:Router){}
loginAdmin(form:NgForm){
console.log(form.value.emailId,form.value.password);
sessionStorage.setItem('emailId',form.value.emailId)
sessionStorage.setItem('password',form.value.password);
this.adminservice.loginadmin(this.admin).subscribe((data:any)=>{
  console.log("Response Received");
  this.router.navigate(['/employee'])
  swal.fire('success','LoggedIn Successfully','success')
},
(error)=>{
  console.log("Error Happened")
  swal.fire('error',"Enter Valid Email Id and Password",'error');
  
});
}
}

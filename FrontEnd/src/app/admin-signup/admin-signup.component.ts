import { Component } from '@angular/core';
import { Admin } from '../admin.model';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'
import swal from 'sweetalert2'
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent {
admin=new Admin();

constructor(private adminservice:AdminServiceService,private router:Router,private formbuilder:FormBuilder ){
  
}
signupadmin(form:NgForm){
  this.adminservice.AdminSignup(this.admin).subscribe((data)=>{
    console.log("Response Received");
    this.router.navigate(['/adminLogin'])
    swal.fire('success',"Registered Successfully",'success')
  },
  (error)=>{
    console.log('exception occured');
    swal.fire('error',"Admin with EmailId Already Exist",'error')
  }
  )
}
cancel(){
  this.router.navigate(['/adminLogin'])
  swal.fire('warning',"You aren't SignedUp",'warning');
  
}
}

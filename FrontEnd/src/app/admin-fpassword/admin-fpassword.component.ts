import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Admin } from '../admin.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2'
@Component({
  selector: 'app-admin-fpassword',
  templateUrl: './admin-fpassword.component.html',
  styleUrls: ['./admin-fpassword.component.css']
})
export class AdminFPasswordComponent {
  id:Number ;
  password: String  ;
  admin=new Admin()
constructor(private aservice:AdminServiceService,private route:ActivatedRoute,private router:Router){

}
ngOnInit(form:NgForm) {
  this.admin = new Admin();
 this.password=form.value.password
  
  this.aservice.getAdminbyEMail(form.value.emailId)
    .subscribe(data => {
      console.log(data)
    if(data!=null){
      this.admin = data;
      this.id=this.admin.id;
     this.admin.password=this.password
      this.updateAdmin()
    }
     else{
     swal.fire('error',"Enter Correct Email ID",'error');
     this.router.navigate(['/fpassword'])
     }
    });
}

updateAdmin() {
  console.log(this.id)
  
  this.aservice.updateAdmin(this.admin,this.id)
    .subscribe(data => {
      console.log(data);
      this.gotoList();
    }, error => console.log(error));swal.fire('error',"Error Occured",'error')
}
cancel(){
  this.router.navigate(['/adminLogin'])
  swal.fire('warning',"Password Not Changed",'warning');
  
}

gotoList() {
  swal.fire('success',"Password Changed Successfully",'success')
  this.router.navigate(['/adminLogin']);}

}

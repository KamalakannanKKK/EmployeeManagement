import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
import { EMployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent {
  employee=new EMployee();
  emailId=sessionStorage.getItem('emailId') || '{}';
  constructor(private router:Router,private empservice:EmployeeService){
 
  }
 
  ngOnInit():void{
    this.empservice.getempbyEMail(this.emailId).subscribe((data)=>{
      this.employee=data;
    });
  }
  logout(){
    sessionStorage.removeItem('emailId');
    this.router.navigate(['/'])
    swal.fire('warning',"Logged Out Successfully",'warning');
    
  }
}

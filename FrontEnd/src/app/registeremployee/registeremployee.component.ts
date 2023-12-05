import { Component } from '@angular/core';
import { EMployee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-registeremployee',
  templateUrl: './registeremployee.component.html',
  styleUrls: ['./registeremployee.component.css']
})
export class RegisteremployeeComponent {
  employee: EMployee;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
      private EmployeeService:EmployeeService ) {
    this.employee=new EMployee ();
  }

  onSubmit() {
    this.EmployeeService.AddEmployee(this.employee).subscribe((data)=>{
      console.log("Response Received");
      this.router.navigate(['/employee'])
      swal.fire('success',"Added Successfully",'success')
    },
    (error)=>{
      console.log('exception occured');
      swal.fire('error',"Employee with EmailId already exist",'error');
    }
    )
  }

  
  cancel(){
    this.router.navigate(['/employee'])
    swal.fire('warning',"Employee Not Added",'warning');
    
  }
}

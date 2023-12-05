import { Component } from '@angular/core';
import { EMployee } from '../employee';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import swal from 'sweetalert2'
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.css']
})
export class PasswordchangeComponent {
  id: Number;
  employee: EMployee;
  emailId=sessionStorage.getItem('emailId') || '{}';
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) {
      
     }

  ngOnInit() {
    this.employee = new EMployee();
   
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getempbyEMail(this.emailId)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
        this.id=this.employee.id
      }, error => console.log(error));
  }

  updateEmployee(id :Number) {
    console.log(this.id)
    this.employeeService.updateEmployee(this.employee,this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = new EMployee();
        this.gotoList();
      }, error => console.log(error));swal.fire('error',"Error Occured",'error')
  }
  cancel(){
    this.router.navigate(['/empdetail'])
    swal.fire('warning',"Password Not Changed",'warning');
    
  }

  gotoList() {
    swal.fire('success',"Password Changed Successfully",'success')
    this.router.navigate(['/login']);}

}

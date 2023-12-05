import { Component } from '@angular/core';
import { EMployee } from '../employee';
import { EmployeeService } from '../employee.service';
import {FormGroup,FormBuilder,Validators} from'@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2'
@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent {

  id: Number;
  employee: EMployee;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) {
      
     }

  ngOnInit() {
    this.employee = new EMployee();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getById(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    console.log(this.id)
    this.employeeService.updateEmployee(this.employee,this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = new EMployee();
        this.gotoList();
      }, error => console.log(error));swal.fire('error',"Error Occured",'error')
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    swal.fire('success',"Updated Successfully",'success')
    this.router.navigate(['/employee']);}
    cancel(){
      this.router.navigate(['/employee']);
      swal.fire('warning',"Details not Updated",'warning')
    }
}

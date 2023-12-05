import { Component } from '@angular/core';
import { Ticket } from '../ticket.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
import { EMployee } from '../employee';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent {
  eid: Number;
  employee: EMployee;
  emailId=sessionStorage.getItem('emailId') || '{}';
 

  ngOnInit() {
    this.employee = new EMployee();
   
    this.eid = this.route.snapshot.params['id'];
    this.tservice.getempbyEMail(this.emailId)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
        this.eid=this.employee.id
      }, error => console.log(error));
  }
  ticket=new Ticket();
 
  constructor(private tservice:EmployeeService,private router:Router,private route:ActivatedRoute){
    
  }
  RTicket(form:NgForm){
    this.ticket.eid=this.employee.id;
    this.ticket.status="Open";
    this.tservice.ticketraise(this.ticket).subscribe((data)=>{
      console.log("Response Received");
      this.router.navigate(['/empdetail'])
      swal.fire('success',"Ticket Raised Successfully",'success');
    },
    (error)=>{
      console.log('exception occured');
      swal.fire('error',"Error Occured",'error');
    }
    )
  }
 

  cancel(){
    this.router.navigate(['/empdetail'])
    swal.fire('warning',"Ticket Not Raised",'warning');
    
  }
}

import { Component } from '@angular/core';
import { Ticket } from '../ticket.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2'
@Component({
  selector: 'app-empticketview',
  templateUrl: './empticketview.component.html',
  styleUrls: ['./empticketview.component.css']
})
export class EmpticketviewComponent {
  ticket:Ticket[];
  t:Ticket=new Ticket()
  id:Number;
  eid:Number;
  
  deleteMessage=false;  
  constructor(private empservice:EmployeeService,public router:Router,private route:ActivatedRoute) {
    
  }
  ngOnInit(eid:Number) {
    eid = this.route.snapshot.params['id'];
  
    console.log(eid);
    this.empservice.getempticketbyId(eid)
    .subscribe(data => {
      this.ticket = data;
      console.log("sucess");
      console.log(this.ticket)
    });
   
  }
  logout(){
    this.router.navigate(['/'])
    swal.fire('warning',"Logged Out Successfully",'warning');
    
  }
}

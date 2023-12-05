import { Component } from '@angular/core';
import { Ticket } from '../ticket.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent {

  id: Number;
  ticket:Ticket;

  constructor(private route: ActivatedRoute,private router: Router,
    private Aservice: AdminServiceService) {
      
     }

  ngOnInit() {
    this.ticket = new Ticket();

    this.id = this.route.snapshot.params['id'];
    
    this.Aservice.getById(this.id)
      .subscribe(data => {
        console.log(data)
        this.ticket = data;
      }, error => console.log(error));
  }

  updateTicket() {
    console.log(this.id)
    this.Aservice.updateticket(this.ticket,this.id)
      .subscribe(data => {
        console.log(data);
        this.ticket = new Ticket();
        this.gotoList();
      }, error => console.log(error));swal.fire('error',"Error Occured",'error')
  }

  onSubmit() {
    this.updateTicket();    
  }
  gotoList() {
    swal.fire('success',"Updated Successfully",'success')
    this.router.navigate(['/viewticket']);}
    cancel(){
      this.router.navigate(['/employee']);
      swal.fire('warning',"Details not Updated",'warning')
    }
}

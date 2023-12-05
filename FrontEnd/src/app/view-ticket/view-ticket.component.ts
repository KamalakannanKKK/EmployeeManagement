import { Component } from '@angular/core';
import { Ticket } from '../ticket.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent {
  ticket:Ticket[];
  t:Ticket=new Ticket()
  id:Number;
  
  deleteMessage=false;  
  constructor(private adminservice:AdminServiceService,public router:Router,private route:ActivatedRoute) {
    
  }
  ngOnInit() {
   
    this.adminservice.GetTicket().subscribe(data => {
      this.ticket = data;
      console.log("sucess");
    });
   
  }
  updateTicket(id:Number){
    this.router.navigate(['updateTicket', id]);
  }
  deleteTicket(id: Number) {
    this.adminservice.deleteTicket(id)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit();
        },
        error => console.log(error));
  }

}

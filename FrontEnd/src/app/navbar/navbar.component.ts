import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router){

  }
  logout(){
    this.router.navigate(['/'])
    swal.fire('warning',"Logged Out Successfully",'warning');
    
  }
}

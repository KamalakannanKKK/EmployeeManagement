import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from './admin.model';
import {Observable} from 'rxjs'
import { Ticket } from './ticket.model';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  public loginadmin(admin: Admin):Observable<any>{
    return this.http.post<any>("http://localhost:8080/AdminLogin",admin);
   
  }
  public AdminSignup(admin :Admin) : Observable<any>{
    console.log(admin);
    return this.http.post<any>("http://localhost:8080/AdminSignup",admin)
    }
    public updateAdmin(admin:Admin,id:Number):Observable<any>{
   
      return this.http.put(`http://localhost:8080/updateAdmin/${id}`,admin)
    }
    
   
      public GetTicket() : Observable<Ticket[]>{
        return this.http.get<Ticket[]>("http://localhost:8080/employee/Allticket")
       }


       public deleteTicket(id: Number) : Observable<any>{
        
        return this.http.delete(`http://localhost:8080/Ticket/${id}`)
       }
       public updateticket(ticket:Ticket,id:Number):Observable<any>{
   
        return this.http.put(`http://localhost:8080/updateticket/${id}`,ticket)
      }
      public getById(id:Number):Observable<Ticket>{
        return this.http.get<Ticket>(`http://localhost:8080/ticket/${id}`)
      }
      public getAdminbyEMail(email:String) :Observable<any>{
        return this.http.get(`http://localhost:8080/Admin/${email}`)
       }
}

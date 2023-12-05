import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMployee } from './employee';
import { Ticket } from './ticket.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
   
  }
  public getById(id:Number):Observable<EMployee>{
    return this.http.get<EMployee>(`http://localhost:8080/Emp/${id}`)
  }

  public GetEmployee() : Observable<EMployee[]>{
    return this.http.get<EMployee[]>("http://localhost:8080/employee/AllEmp")
   }
   public AddEmployee(employee : EMployee) : Observable<EMployee>{
    return this.http.post<EMployee>("http://localhost:8080/addEmp",employee)
   }
   public deleteEmployee(id: Number) : Observable<any>{
    console.log(`http://localhost:8080/DeleteEmp/${id}`);
    return this.http.delete(`http://localhost:8080/DeleteEmp/${id}`)
   }
  public updateEmployee(employee :EMployee,id:Number):Observable<any>{
   
    return this.http.put(`http://localhost:8080/updateEmp/${id}`,employee)
  }
  
  public loginEmployee(employee:EMployee):Observable<any>{
    return this.http.post<any>("http://localhost:8080/EmployeeLogin",employee);
   
  }
 public getempbyEMail(email:String) :Observable<any>{
  return this.http.get(`http://localhost:8080/Employee/${email}`)
 }
 public EmployeeSignup(employee:EMployee) : Observable<any>{
  
  return this.http.post<any>("http://localhost:8080/EmployeeSignup",employee)
  }
  public ticketraise(ticket :Ticket) : Observable<Ticket>{
     
    return this.http.post<any>("http://localhost:8080/Ticket",ticket)
    }
    public getempticketbyId(id:Number) :Observable<Ticket[]>{
      console.log(`http://localhost:8080/ticket/emp/${id}`);
      return this.http.get<Ticket[]>(`http://localhost:8080/ticket/emp/${id}`)
     }
  }

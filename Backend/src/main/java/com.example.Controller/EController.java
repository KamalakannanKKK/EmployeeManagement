package com.example.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.ResourceNotFoundException;
import com.example.Entity.AdminEntity;
import com.example.Entity.Employee;
import com.example.Entity.Ticket;
import com.example.Repository.AdminRepository;
import com.example.Repository.ERepository;
import com.example.Repository.TicketRepository;
import com.example.service.AdminServices;
import com.example.service.Services;
import com.example.service.TicketService;

@RestController
@org.springframework.stereotype.Controller
@CrossOrigin(origins = "http://localhost:4200")
public class EController {

@Autowired
public Services service;
@Autowired
public TicketService tservice;
@Autowired
public ERepository ERepo;
@Autowired
public TicketRepository tRepo;
@Autowired
private AdminServices Adminservice;
@Autowired
private AdminRepository arepo;

@PostMapping("/AdminSignup")
public AdminEntity adminSignup(@RequestBody AdminEntity admin) throws Exception {
			String tempEmailId=admin.getEmailId().toLowerCase();
	if(tempEmailId!= null && !"".equals(tempEmailId)) {
	AdminEntity adminobj=this.Adminservice.FindAdminEmail(tempEmailId);
	if(adminobj!=null) {
		throw new Exception("admin with"+tempEmailId+"is Already Exist");
	}
}
	AdminEntity adminobj=null;
	admin.setEmailId(tempEmailId.toLowerCase());
	adminobj=this.Adminservice.saveadmin(admin);
	return adminobj;
}
@PostMapping("/EmployeeSignup")
public Employee EmployeeSignup(@RequestBody Employee employee) throws Exception {
			String tempEmailId=employee.getEmailId().toLowerCase();
	if(tempEmailId!= null && !"".equals(tempEmailId)) {
	Employee employeeobj=this.service.FindEmployeeEmail(tempEmailId);
	if(employeeobj!=null) {
		throw new Exception("Employee with"+tempEmailId+"is Already Exist");
	}
}
	Employee empobj=null;
    employee.setEmailId(tempEmailId.toLowerCase());
	empobj=this.service.saveemployee(employee);
	return empobj;
}

@SuppressWarnings("unused")
@PostMapping("/AdminLogin")
public AdminEntity  adminLogin(@RequestBody AdminEntity admin) throws Exception{
	String tempEmailId=admin.getEmailId();
	String tempPassword=admin.getPassword();
	AdminEntity adminobj=admin;
	AdminEntity p=null;
	if(tempEmailId!=null && tempPassword!=null) {
		p=this.Adminservice.FindAdminEmailAndPassword(tempEmailId, tempPassword);
	}
	if(p==null) {
		throw new Exception("Invalid Credentials");
	}
	
	else {
		System.out.println("LoggedIn Successfully");
	}
	return adminobj;
}

@PostMapping("/EmployeeLogin")
public Employee  EmployeeLogin(@RequestBody Employee employee) throws Exception{
	String tempEmailId=employee.getEmailId();
	String tempPassword=employee.getPassword();
	Employee empobj=employee;
	Employee p=null;
	if(tempEmailId!=null && tempPassword!=null) {
		p=this.service.FindEmployeeEmailAndPassword(tempEmailId, tempPassword);
	}
	if(p==null) {
		throw new Exception("Invalid Credentials");
	}
	return empobj;
}

@GetMapping("/")
public String welcome() {
	return "Welcome User";
}

@GetMapping("employee/AllEmp")
public List<Employee> getAllEmployee(){
	return this.service.getAllEmp();
}
@GetMapping("Emp/{id}")
public Optional<Employee> getEmpByID(@PathVariable (value="id") int id) {
	return this.service.findbyId(id);
}
@GetMapping("Employee/{email}")
public Employee getEmpByEmail(@PathVariable (value="email") String Email) {
	return this.service.FindEmployeeEmail(Email);
}
@GetMapping("Admin/{email}")
public AdminEntity getAdminByEmail(@PathVariable (value="email") String Email) {
	return this.Adminservice.FindAdminEmail(Email);
}
@GetMapping("ticket/emp/{eid}")
public List<Ticket> getticketByid(@PathVariable (value="eid") int eid) {
	return this.tservice.FindTicket(eid);
}

@PostMapping("addEmp")
public Employee addEmployee(@RequestBody Employee employee) throws Exception {
	String tempEmailId=employee.getEmailId().toLowerCase();
	if(tempEmailId!= null && !"".equals(tempEmailId)) {
		Employee employeeobj=this.service.FindEmployeeEmail(tempEmailId);
		if(employeeobj!=null) {
			throw new Exception("Employee with"+tempEmailId+"is Already Exist");
		}}
	employee.setEmailId(employee.getEmailId().toLowerCase());
	employee.setEmailId(tempEmailId.toLowerCase());
	return this.service.addEmp(employee);
}

@DeleteMapping("/DeleteEmp/{id}")
public void delEMp(@PathVariable (value="id") int id) {
	this.ERepo.deleteById(id);
}

@DeleteMapping("/Ticket/{id}")
public void delticket(@PathVariable (value="id") int id) {
	this.tRepo.deleteById(id);
}
@PostMapping("/Ticket")
public Ticket isssueticket(@RequestBody Ticket ticket) throws Exception {
			
	Ticket ticketobj=null;
	ticketobj=this.tservice.addticket(ticket);
	return ticketobj;
}
@GetMapping("employee/Allticket")
public List<Ticket> getAllTicket(){
	return this.tservice.getAllticket();
}
@PutMapping("updateEmp/{id}")
public ResponseEntity<Employee> updateEmp(@RequestBody Employee employee,@PathVariable (value="id") int id) {
	Employee old=this.ERepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Exist with id"+id));
	old.setName(employee.getName());
	old.setPId(employee.getPId());
	old.setRole(employee.getRole());
	old.setPassword(employee.getPassword());
	old.setPName(employee.getPName());
	old.setGender(employee.getGender());
	Employee updateEmp= this.ERepo.save(employee);
	return ResponseEntity.ok(updateEmp);
}
@PutMapping("updateAdmin/{id}")
public ResponseEntity<AdminEntity> updateAdmin(@RequestBody AdminEntity admin,@PathVariable (value="id") int id) {
	AdminEntity old=this.arepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Exist with id"+id));
	old.setPassword(admin.getPassword());
	
	AdminEntity updateAdmin= this.arepo.save(admin);
	return ResponseEntity.ok(updateAdmin);
}
@PutMapping("updateticket/{id}")
public ResponseEntity<Ticket> updateticket (@RequestBody Ticket ticket,@PathVariable (value="id") int id) {
	Ticket old=this.tRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Ticket Not Exist with id"+id));
	old.setStatus(ticket.getStatus());
	
	Ticket updateticket= this.tRepo.save(ticket);
	return ResponseEntity.ok(updateticket);
}
@GetMapping("ticket/{id}")
public Optional<Ticket> getticketByID(@PathVariable (value="id") int id) {
	return this.tRepo.findById(id);
}
}


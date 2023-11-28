package com.example.Entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@Entity
@Table(name="Employee")
public class Employee {
@jakarta.persistence.Id
@GeneratedValue(strategy=GenerationType.SEQUENCE)
@Column(name="Employee ID")
private int Id;
@Column(name="Name")
private String Name ;
@Column(name="Gender")
private String gender ;

public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public Employee(int id, String name, String gender, String emailId, String password, int pId, String pName,
		String role) {
	super();
	Id = id;
	Name = name;
	this.gender = gender;
	EmailId = emailId;
	this.password = password;
	PId = pId;
	PName = pName;
	Role = role;
}
@Column(name="Email ID")
private String EmailId;
private String password;
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getEmailId() {
	return EmailId;
}
public void setEmailId(String emailId) {
	EmailId = emailId;
}
@Column(name="Project ID")
private int PId;
@Column(name="Project Name")
private String PName;
@Column(name="Role")
private String Role;

public int getId() {
	return Id;
}
public void setId(int id) {
	Id = id;
}
public String getName() {
	return Name;
}
public void setName(String name) {
	Name = name;
}
public int getPId() {
	return PId;
}
public void setPId(int pId) {
	PId = pId;
}
public String getPName() {
	return PName;
}
public void setPName(String pName) {
	PName = pName;
}
public String getRole() {
	return Role;
}
public void setRole(String role) {
	Role = role;
}





public Employee() {
	super();
	// TODO Auto-generated constructor stub
}




}

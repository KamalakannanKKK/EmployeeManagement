package com.example.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@Entity
@Table(name="Ticket")
public class Ticket {

	@jakarta.persistence.Id
	@Column(name="ID")
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int Id;
	@Column(name="EID")
	private int EID ;
	public int getEID() {
		return EID;
	}
	public void setEID(int eID) {
		EID = eID;
	}
	@Column(name="Name")
	private String Name ;
	@Column(name="Issue")
	private String issue;
	@Column(name="Status")
	private String Status;
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
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
	public String getIssue() {
		return issue;
	}
	public void setIssue(String issue) {
		this.issue = issue;
	}
	
	
	public Ticket(int id, int eID, String name, String issue, String status) {
		super();
		Id = id;
		EID = eID;
		Name = name;
		this.issue = issue;
		Status = status;
	}
	public Ticket() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}

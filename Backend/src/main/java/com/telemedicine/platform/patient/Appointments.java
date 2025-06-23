package com.telemedicine.platform.patient;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Appointments {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String doctorName;
	private LocalDate date;
	private LocalTime time;
	private int fees;
	
	
	public Appointments() {
		super();
	}

	public Appointments(int id,String doctorName, LocalDate date, LocalTime time, int fees) {
		super();
		this.id=id;
		this.doctorName = doctorName;
		this.date = date;
		this.time = time;
		this.fees = fees;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public int getFees() {
		return fees;
	}

	public void setFees(int fees) {
		this.fees = fees;
	}

	@Override
	public String toString() {
		return "Appointments [id=" + id + ", doctorName=" + doctorName + ", date=" + date + ", time=" + time + ", fees="
				+ fees + "]";
	}

	
	
	
	
	
	
}

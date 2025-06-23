package com.telemedicine.platform.patient;

import java.time.LocalDate;


import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;



@Service
public class PatientService {
	private static int count = 0;
	private static List<Appointments> appointment = new ArrayList<>();
	static {
		appointment.add(new Appointments(++count,"Dr. manan",LocalDate.now(),LocalTime.now(),4000));
		appointment.add(new Appointments(++count,"Dr. Rudra",LocalDate.now(),LocalTime.now(),5000));
	}
	
	public List<Appointments> viewSlots(){
		return appointment;
	}
	
	public Appointments addSlot(String doctorName,LocalDate date,LocalTime time,int fees) {
		Appointments newSlot = new Appointments(++count,doctorName,date,time,fees);
		appointment.add(newSlot);
		return newSlot;
	}
	
	public int findById(int id) {
		Predicate<? super Appointments> predicate = newSlot -> newSlot.getId() == id;
		Appointments newSlot = appointment.stream().filter(predicate).findFirst().get();
		return newSlot.getFees();
	}
	
	public void deleteId(int id) {
		Predicate<? super Appointments> predicate = newSlot -> newSlot.getId() == id;
		appointment.removeIf(predicate);
	}
}

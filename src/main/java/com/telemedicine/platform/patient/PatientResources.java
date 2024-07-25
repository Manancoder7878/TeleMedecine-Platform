package com.telemedicine.platform.patient;

import java.util.List;

import java.util.Map;

import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.razorpay.*;

public class PatientResources {
	private PatientService patientservice;

	public PatientResources(PatientService patientservice) {
		super();
		this.patientservice = patientservice;
	}
	
	@GetMapping("slots")
	public List<Appointments> retrieve(){
		return patientservice.viewSlots();
	} 
	
	@PostMapping("addslots")
	public Appointments createSlot(@RequestBody Appointments appointment) {
		Appointments createdslot = patientservice.addSlot(appointment.getDoctorName(),appointment.getDate(), appointment.getTime(), appointment.getFees());
		return createdslot;
	}
	
	@GetMapping("slots/{id}")
	public int retrieveById(@PathVariable int id) {
		return patientservice.findById(id);
	}
	
	@DeleteMapping("delete/{id}")
	public ResponseEntity<Void> deleteSlot(@PathVariable int id){
		patientservice.deleteId(id);
		return ResponseEntity.noContent().build();
	}

	
}

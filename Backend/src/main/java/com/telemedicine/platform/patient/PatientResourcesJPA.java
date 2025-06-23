package com.telemedicine.platform.patient;

import java.util.List;

import java.util.Map;
import java.util.Optional;

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

@RestController
public class PatientResourcesJPA {
	
	private DoctorRepo doctorrepo;
	
	
	public PatientResourcesJPA(DoctorRepo doctorrepo) {
		super();
		this.doctorrepo = doctorrepo;
	}

	@GetMapping("slots")
	public List<Appointments> retrieve(){
		return doctorrepo.findAll();
	} 
	
	@PostMapping("addslots")
	public Appointments createSlot(@RequestBody Appointments appointment) {
		Appointments createdslot = doctorrepo.save(appointment);
		return createdslot;
	}
	
	@GetMapping("slots/{id}")
	public int retrieveById(@PathVariable int id) {
		Optional<Appointments> optionalslot = doctorrepo.findById(id);
		Appointments appointments = optionalslot.get();
		return appointments.getFees();
	}
	
	@DeleteMapping("delete/{id}")
	public ResponseEntity<Void> deleteSlot(@PathVariable int id){
		doctorrepo.deleteById(id);
		return ResponseEntity.noContent().build();
	}

	
}

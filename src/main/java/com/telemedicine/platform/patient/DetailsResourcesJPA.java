package com.telemedicine.platform.patient;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DetailsResourcesJPA {
	
	PatientRepo patientrepo;

	public DetailsResourcesJPA(PatientRepo patientrepo) {
		super();
		this.patientrepo = patientrepo;
	}
	
	@GetMapping("patients")
	public List<Details> retrieveAll(){
		return patientrepo.findAll();
	}
	
	@PostMapping("addpatient")
	public Details addPatient(@RequestBody Details detail) {
		Details patientslot = patientrepo.save(detail);
		return patientslot;
	}
	
	@DeleteMapping("deletepatient/{key}")
	public ResponseEntity<Void> deleteSlot(@PathVariable int key){
		patientrepo.deleteById(key);
		return ResponseEntity.noContent().build();
	}
	
}

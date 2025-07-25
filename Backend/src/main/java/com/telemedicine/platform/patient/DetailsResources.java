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


public class DetailsResources {
	
	DetailsService detailservice;

	public DetailsResources(DetailsService detailservice) {
		super();
		this.detailservice = detailservice;
	}
	
	@GetMapping("patients")
	public List<Details> retrieveAll(){
		return detailservice.viewDetail();
	}
	
//	@PostMapping("addpatient")
//	public Details addPatient(@RequestBody Details detail) {
//		Details patient = detailservice.addDetails(detail.getPatientName(),detail.getAge(),detail.getGender(),detail.getPhone());
//		return patient;
//	}
	
	
}

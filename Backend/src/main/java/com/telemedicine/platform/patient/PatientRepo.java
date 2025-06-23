package com.telemedicine.platform.patient;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepo extends JpaRepository<Details, Integer>{

	public List<Details> findAll();
	
}

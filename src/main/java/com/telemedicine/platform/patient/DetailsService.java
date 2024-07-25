package com.telemedicine.platform.patient;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class DetailsService {

	private static List<Details> detail = new ArrayList<>();
	static {
		
	}
	
	public List<Details> viewDetail(){
		return detail;
	}
	
	
	
}

package com.telemedicine.platform.patient;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Details {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int key;
	
	
	private String patientName;
	private int age;
	private String gender;
	private String phone;
	
	public Details() {
		super();
	}

	public Details(int key,String patientName, int age, String gender, String phone) {
		super();
		this.key = key;
		this.patientName = patientName;
		this.age = age;
		this.gender = gender;
		this.phone = phone;
	}
	
	public int getKey() {
		return key;
	}

	public void setKey(int key) {
		this.key = key;
	}



	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Override
	public String toString() {
		return "Details [key=" + key + ", patientName=" + patientName + ", age=" + age + ", gender=" + gender
				+ ", phone=" + phone + "]";
	}
}

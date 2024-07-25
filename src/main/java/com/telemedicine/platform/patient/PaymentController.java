package com.telemedicine.platform.patient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.RazorpayException;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {
	
	@Autowired
    private RazorPayService razorpayService;

    @GetMapping("/createOrder/{id}")
    public String createOrder(@PathVariable int id) {
        try {
            return razorpayService.createOrder(id);
        } catch (RazorpayException e) {
            return e.getMessage();
        }
    }
}

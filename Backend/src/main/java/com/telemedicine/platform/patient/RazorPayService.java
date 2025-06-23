package com.telemedicine.platform.patient;

import java.util.Optional;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@Service
public class RazorPayService {
	
	@Value("${razorpay.key}")
    private String razorpayKey;

    @Value("${razorpay.secret}")
    private String razorpaySecret;
    
    @Autowired
    DoctorRepo doctorrepo;
    
    public String createOrder(int id) throws RazorpayException {
        RazorpayClient client = new RazorpayClient(razorpayKey, razorpaySecret);
        Optional<Appointments> optionalslot = doctorrepo.findById(id);
		Appointments appointments = optionalslot.get();
		int amount = appointments.getFees();
        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount",(int)(amount * 100)); // amount in the smallest currency unit
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "order_rcptid_11");
        orderRequest.put("payment_capture", true);

        Order order = client.orders.create(orderRequest);
        return order.toString();
    }
}

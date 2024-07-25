import styles from "./Card.module.css";
import Phone from "../assets/Phone.svg"
import Gender from "../assets/Gender.png"
import doctorstaff from "../assets/doctorstaff.jpg"
import Age from "../assets/Age.png" 
import patient from "../assets/patient.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { postdetails } from "./Api";
import { payment } from "./Api";
import FrameComponent from "./FrameComponent";
import axios from "axios";
const Card = () => {
  const [patient,setPatient] = useState(
    {
      patientName: '',
      age: '',
      gender: '',
      phone: ''
    }
  );
  const {rowid} = useParams();
  const handle = (e) => {
    setPatient({...patient,[e.target.name]:e.target.value})
  }
  const handlePayment = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/payment/createOrder/${rowid}`);
        console.log("Backend response",response);
        const { id, amount: orderAmount } = (response.data);

        const options = {
            key: "rzp_test_MfiZXTrb1Ib6jW", // Replace with your Razorpay API key
            amount: orderAmount,
            name: "Your Company Name",
            description: "Test Transaction",
            order_id: id,
            handler: function (response) {
                alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: "Customer Name",
                email: "customer.email@example.com",
                contact: "9999999999"
            },
            notes: {
                address: "Customer Address"
            },
            theme: {
                color: "#3399cc"
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    } catch (error) {
        console.error("Payment failed", error);
    }
};

  const handlePay = (e) => {
    e.preventDefault();
    postdetails(patient).then(response => console.log(response.data)).catch(error => console.log(error));
    handlePayment();
  }
  return (
    <div className={styles.card}>
      <div className={styles.cardChild} />
      <img className={styles.cardItem} alt="" src={doctorstaff} />
      <div className={styles.cardInner} />
      <div className={styles.ellipseParent}>
        <div className={styles.groupChild} />
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
        </div>
      </div>
      <b className={styles.medifine}>Medifine</b>
      <b className={styles.name}>Name</b>
      <b className={styles.age}>Age</b>
      <b className={styles.gender}>Gender</b>
      <input
        className={styles.enterNameHere}
        placeholder="Enter name here"
        type="text"
        onChange={handle}
        name = "patientName"
      />
      <input
        className={styles.enterAgeHere}
        placeholder="Enter age here"
        type="text"
        onChange={handle}
        name = "age"
      />
      <input
        className={styles.enterGenderHere}
        placeholder="Enter gender here"
        type="text"
        onChange={handle}
        name = "gender"
      />
      <input
        className={styles.enterSymtomsHere}
        placeholder="Enter phone  here"
        type="text"
        onChange={handle}
        name = "phone"
      />
      <div className={styles.enterYourDetails}>Enter your details</div>
      <img className={styles.bxsuserIcon} alt="" src={Gender} />
      <div className={styles.lineDiv} />
      <div className={styles.cardChild1} />
      <div className={styles.cardChild2} />
      <div className={styles.cardChild3} />
      <button className={styles.makeAppointment}>
        <div className={styles.pay} onClick={handlePay}>Pay</div>
      </button>
      <b className={styles.symtoms}>Phone</b>
      <img className={styles.bxsuserIcon1} alt="" src={Age} />
      <img className={styles.bxsuserIcon2} alt="" src={Phone} />
      <img className={styles.bxsuserIcon3} alt="" src={Gender}/>
    </div>
  );
};

export default Card;

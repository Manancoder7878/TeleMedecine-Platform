import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import "./Hero.css";
import rectup from '../assets/rectup.png'
import rectdown from '../assets/rectdown.png'
import doctor from '../assets/doctor.png'
import stethos from '../assets/stethos.png'
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
const Hero = () => {
  const {user , loginWithRedirect,isAuthenticated,logout} = useAuth0();
  const navigate = useNavigate();
  function isCheck(){
    if(isAuthenticated){
      navigate('/role')
    }
    else{
      navigate('/')
    }
  }
  return (
    
    <div className="hero">
      <FrameComponent/>
      <img
        className="notostethoscope-icon"
        alt="stethos-pic"
        src={stethos}
      />
      <img
        className="homepage-design-icon"
        alt="doctor"
        src={doctor}
      />
      <textarea
        className="hero-child"
        placeholder={`Complete Health
Care Solutions for 
Everyone`}
      />
      <h6 className="were-always-available-container">
        <p className="were-always-available">
          We're always available for our Patients with emergency problems.
        </p>
        <p className="were-always-available">
          You can easily reach us 24/7. We focused on highest quality.
        </p>
      </h6>
      <button className="make-appointment" >
        <div className="make-appointment1" onClick={() => isCheck()}><Link to = '/role' style={{ textDecoration: 'none', color: 'white' }}>Select Role</Link></div>
      </button>
      <img className="hero-item" alt="" src={rectup}/>
      <img className="hero-inner" alt="" src={rectdown} />
    </div>
  );
};

export default Hero;

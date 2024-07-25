import styles from "./Frame.module.css";
import patient from '../assets/patient.svg'
import doctorlogo from '../assets/doctorlogo.svg'
import stethos from '../assets/stethos.png'
import FrameComponent from "./FrameComponent";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
const Frame = () => {
  const navigate = useNavigate();
  function book(){
      navigate('/book');
  }
  function slot(){
    navigate('/addslot')
  }
  function list(){
    navigate('/patlist');
  }
  return (
    <div className={styles.whatsYourRoleParent}>
      <FrameComponent/>
      <h2 className={styles.whatsYourRole}>What`s your role?</h2>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.fa6SoliduserDoctorParent}>
          <img
            className={styles.fa6SoliduserDoctorIcon}
            alt=""
            src={doctorlogo}
          />
          <h4 className={styles.expertDoctor}>Expert Doctor</h4>
          <h4 className={styles.expertDoctor} onClick = {() => list()}><Link to = '/patlist'>Patients list</Link></h4>
          <h4 className={styles.expertDoctor} onClick={() => slot()}><Link to = '/addslot'>Add slots</Link></h4>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src={patient} />
          <h4 className={styles.patient}>Patient
          </h4>
          <h4 className={styles.patient} onClick={() =>book()}><Link to='/book'>Book Slot</Link>
          </h4>
        </div>
      </div>
      <img
        className={styles.notostethoscopeIcon}
        alt=""
        src={stethos}
      />
    </div>
  );
};

export default Frame;

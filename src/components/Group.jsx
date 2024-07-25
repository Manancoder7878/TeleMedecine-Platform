import styles from "./Group.module.css";
import patient from "../assets/patient.svg"
import time from "../assets/time.svg"
import date from "../assets/date.svg"
import { useState } from "react";
import { addslot, aslot } from "./Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Group = () => {
  const navigate = useNavigate();
  const [pos,setPost] = useState(
    {
      doctorName: "",
      date: "",
      time: "",
      fees: ""
    }
  )
  const handleInput = (e) => {
      setPost({...pos,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    aslot(pos).then(response => console.log(response.data)).catch((error) => console.log(error))
    navigate('/role')
  }
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" src="/rectangle-13@2x.png" />
        <div className={styles.groupInner} />
        <div className={styles.logo}>
          <div className={styles.ellipseParent}>
            <div className={styles.ellipseDiv} />
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.groupChild1} />
            </div>
          </div>
          <b className={styles.medifine}>Medifine</b>
        </div>
        <div className={styles.nameParent}>
          <b className={styles.name}>Name</b>
          <b className={styles.date}>Date</b>
          <b className={styles.time}>Time</b>
          <input
            className={styles.enterNameHere}
            placeholder="Enter name here"
            type="text"
            onChange={handleInput}
            name = "doctorName"
          />
          <input
            className={styles.enterDateHere}
            placeholder="Enter date here"
            type="date"
            onChange={handleInput}
            name = "date"
          />
          <input
            className={styles.enterTimeHere}
            placeholder="Enter time here"
            type="time"
            onChange={handleInput}
            name = "time"
          />
          <input
            className={styles.enterFeesHere}
            placeholder="Enter fees here"
            type="text"
            onChange={handleInput}
            name = "fees"
          />
          <div className={styles.addSlots}>Add slots</div>
          <img className={styles.bxsuserIcon} alt="" src={patient} />
          <div className={styles.bxsuser} />
          <div className={styles.lineDiv} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.makeAppointment}>
            <div className={styles.submit} onClick={handleSubmit} type="submit">Submit</div>
          </div>
          <b className={styles.fees}>Fees</b>
          <img className={styles.bxsuserIcon1} alt="" src={date} />
        </div>
      </div>
      <img className={styles.groupIcon} alt="" src={time} />
    </div>
  );
};

export default Group;

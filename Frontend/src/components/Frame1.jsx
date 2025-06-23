import Group from "./Group";
import styles from "./Frame1.module.css";
import fees from "../assets/fees.png";
const Frame1 = () => {
  return (
    <div className="slot">
    <div className={styles.groupParent}>
      <Group />
      <img
        className={styles.currencyRupeeIcon}
        alt=""
        src={fees}
      />
    </div>
    </div>
  );
};

export default Frame1;

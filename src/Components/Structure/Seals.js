import React from "react";
import styles from "./Seals.module.scss";

const Seals = () => {
  return (
    <div className={styles.sealscontainer}>
      <div className={styles.deal}>
        <span>&#xe018;</span>
        <h4>BEST DEAL ONLINE</h4>
        <p>Discount off weekly for monthly</p>
      </div>
      <div className={styles.quality}>
        <span>&#xe106;</span>
        <h4>TOP QUALITY</h4>
        <p>Service quality and customer satisfaction</p>
      </div>
      <div className={styles.return}>
        <span>&#x4a;</span>
        <h4>15 DAYS RETURN</h4>
        <p>Cancel and return your within 15 days</p>
      </div>
    </div>
  );
};

export default Seals;

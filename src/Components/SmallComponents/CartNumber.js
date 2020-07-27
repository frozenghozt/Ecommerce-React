import React from "react";
import styles from "./CartNumber.module.scss";

const CartNumber = (props) => {
  return <div className={styles.bullet}>{props.number}</div>;
};

export default CartNumber;

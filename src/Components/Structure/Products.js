import React from "react";
import styles from "./Products.module.scss";
import HpProduct from "../SmallComponents/HpProduct";

const Product = () => {
  return (
    <div className={styles.products}>
      <HpProduct />
      <HpProduct />
      <HpProduct />
      <HpProduct />
      <HpProduct />
      <HpProduct />
      <HpProduct />
      <HpProduct />
    </div>
  );
};

export default Product;

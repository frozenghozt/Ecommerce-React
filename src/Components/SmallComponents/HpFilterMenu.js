import React from "react";
import styles from "./HpFilterMenu.module.scss";

const HpFilterMenu = () => {
  return (
    <div className={styles.HpFilterMenu}>
      <div className={styles.filters}>
        <span>All Products</span>
        <span>Best Sellers</span>
        <span>New Arrival</span>
        <span>Sales Products</span>
        <span>Popular</span>
      </div>
      <div className={styles.filterToggle}>
        <span>Filter</span>
        <span className={styles.arrowdown}>&#x33;</span>
      </div>
    </div>
  );
};

export default HpFilterMenu;

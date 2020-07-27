import React from "react";
import styles from "./HpFilters.module.scss";

const HpFilters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.filter}>
        <div className={styles.title}>
          <span>Sort By</span>
        </div>
        <div className={styles.sort}>
          <span>Best seller</span>
          <span>Popularity</span>
          <span>Average rating</span>
          <span>New arrival</span>
          <span>Price: low to high</span>
          <span>Price: high to low</span>
        </div>
      </div>
      <div className={styles.filter}>
        <div className={styles.title}>
          <span>Price</span>
        </div>
        <div className={styles.price}>
          <span>$0.00 - $50.00</span>
          <span>$50.00 - $100.00</span>
          <span>$100.00 - $150.00</span>
          <span>$150.00 - $200.00</span>
          <span>$200.00 - $250.00</span>
          <span>$250.00+</span>
        </div>
      </div>
      <div className={styles.filter}>
        <div className={styles.title}>
          <span>Color</span>
        </div>
        <div className={styles.color}>
          <div>Yellow</div>
          <div>Gray</div>
          <div>Red</div>
          <div>Black</div>
          <div>Blue</div>
          <div>Green</div>
        </div>
      </div>
      <div className={styles.filter}>
        <div className={styles.title}>
          <span>Size</span>
        </div>
        <div className={styles.size}>
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
          <span>XXL</span>
          <span>Over Size</span>
        </div>
      </div>
      <div className={styles.filter}>
        <div className={styles.title}>
          <span>Tags</span>
        </div>
        <div className={styles.tags}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default HpFilters;

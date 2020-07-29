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
          <button>
            <span>Best seller</span>
          </button>
          <button>
            <span>Popularity</span>
          </button>
          <button>
            <span>Average rating</span>
          </button>
          <button>
            <span>New arrival</span>
          </button>
          <button>
            <span>Price: low to high</span>
          </button>
          <button>
            <span>Price: high to low</span>
          </button>
        </div>
      </div>
      <div className={styles.filter}>
        <div className={styles.title}>
          <span>Price</span>
        </div>
        <div className={styles.price}>
          <button>
            <span>$0.00 - $50.00</span>
          </button>
          <button>
            <span>$50.00 - $100.00</span>
          </button>
          <button>
            <span>$100.00 - $150.00</span>
          </button>
          <button>
            <span>$150.00 - $200.00</span>
          </button>
          <button>
            <span>$200.00 - $250.00</span>
          </button>
          <button>
            <span>$250.00+</span>
          </button>
        </div>
      </div>
      <div className={styles.filter}>
        <div className={styles.title}>
          <span>Color</span>
        </div>
        <div className={styles.color}>
          <button>
            <span className={styles.circleyellow}></span>
            <span>Yellow</span>
          </button>
          <button>
            <span className={styles.circlegray}></span>
            <span>Gray</span>
          </button>
          <button>
            <span className={styles.circlered}></span>
            <span>Red</span>
          </button>
          <button>
            <span className={styles.circleblack}></span>
            <span>Black</span>
          </button>
          <button>
            <span className={styles.circleblue}></span>
            <span>Blue</span>
          </button>
          <button>
            <span className={styles.circlegreen}></span>
            <span>Green</span>
          </button>
        </div>
      </div>
      <div className={styles.filter}>
        <div className={styles.title}>
          <span>Size</span>
        </div>
        <div className={styles.size}>
          <button>
            <span>L</span>
          </button>
          <button>
            <span>M</span>
          </button>
          <button>
            <span>S</span>
          </button>
          <button>
            <span>XL</span>
          </button>
          <button>
            <span>XXL</span>
          </button>
          <button>
            <span>Over Size</span>
          </button>
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

import React, { useState } from "react";
import SaleRect from "./SaleRect";
import HotRect from "./HotRect";
import ProductHover from "./ProductHover";
import styles from "./HpProduct.module.scss";

const HpProduct = () => {
  const [isHover, setIsHover] = useState(false);

  const hoverHandler = () => {
    setIsHover(!isHover);
  };

  return (
    <div className={styles.productcontainer}>
      <div className={styles.product}>
        <div
          className={styles.image}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          <SaleRect />
          <HotRect />
          {isHover ? <ProductHover /> : null}
        </div>
        <div className={styles.info}>
          <div className={styles.namecolor}>
            <span>Floral Print Shirt</span>
            <div className={styles.colors}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.price}>$35.99</div>
        </div>
      </div>
    </div>
  );
};

export default HpProduct;

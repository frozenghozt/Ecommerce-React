import React, { useState } from "react";
import SaleRect from "./SaleRect";
import HotRect from "./HotRect";
import ProductHover from "./ProductHover";
import styles from "./HpProduct.module.scss";

const HpProduct = ({ name, price, img }) => {
  const [isHover, setIsHover] = useState(false);

  const hoverHandler = () => {
    setIsHover(!isHover);
  };

  return (
    <div className={styles.productcontainer}>
      <div className={styles.product}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${img})` }}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          <SaleRect />
          <HotRect />
          {isHover ? <ProductHover /> : null}
        </div>
        <div className={styles.info}>
          <div className={styles.namecolor}>
            <span>{name}</span>
            <div className={styles.colors}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.price}>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default HpProduct;

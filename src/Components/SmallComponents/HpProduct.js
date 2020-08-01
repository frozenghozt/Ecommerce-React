import React, { useState } from "react";
import SaleRect from "./SaleRect";
import HotRect from "./HotRect";
import ProductHover from "./ProductHover";
import styles from "./HpProduct.module.scss";

const HpProduct = ({ name, price, prevprice, img, hot, colors }) => {
  const [isHover, setIsHover] = useState(false);

  const hoverHandler = () => {
    setIsHover(!isHover);
  };
  console.log(colors);
  return (
    <div className={styles.productcontainer}>
      <div className={styles.product}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${img})` }}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          {hot ? <HotRect /> : null}
          {prevprice > price ? <SaleRect /> : null}
          {isHover ? <ProductHover /> : null}
        </div>
        <div className={styles.info}>
          <div className={styles.namecolor}>
            <span>{name}</span>
            <div className={styles.colors}>
              {colors.map((color) => (
                <span
                  style={{
                    backgroundColor: `${color}`,
                    border:
                      color === "white"
                        ? "1px solid gray"
                        : `1px solid ${color}`,
                  }}
                ></span>
              ))}
            </div>
          </div>
          <div className={styles.price}>
            <span>$ {price}</span>
            {prevprice > 0 ? <span>{prevprice}</span> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HpProduct;

import React from "react";
import styles from "./HpProduct.module.scss";

const HpProduct = () => {
  return (
    <div className={styles.productcontainer}>
      <div className={styles.product}>
        <div className={styles.image}>
          {/* <picture>
            <source
              media="(min-width:650px)"
              srcset="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/394bb92d-7ff0-4a8f-816b-166a879e66f4/kyrie-6-big-kids-basketball-shoe-nF6V4S.jpg"
            />
            <source
              media="(min-width:465px)"
              srcset="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/394bb92d-7ff0-4a8f-816b-166a879e66f4/kyrie-6-big-kids-basketball-shoe-nF6V4S.jpg"
            />
            <img
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/394bb92d-7ff0-4a8f-816b-166a879e66f4/kyrie-6-big-kids-basketball-shoe-nF6V4S.jpg"
              alt="Shoes"
              style={{ width: "auto" }}
            />
          </picture> */}
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

import React from "react";
import { useDispatch } from "react-redux";
import styles from "./ProductHover.module.scss";
// Actions
import { addFavorite } from "../../redux/actions/productAct";

const ProductHover = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.producthover}>
      <div className={styles.addcart}>
        <span>&#xe07a;</span>
      </div>
      <div className={styles.viewproduct}>
        <span>VIEW PRODUCT</span>
      </div>
      <div className={styles.favorite} onClick={() => dispatch(addFavorite(1))}>
        <span>&#xe089;</span>
      </div>
    </div>
  );
};

export default ProductHover;

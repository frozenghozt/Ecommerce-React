import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./ProductHover.module.scss";
// Actions
import { addFavorite } from "../../redux/actions/productAct";
import { removeFavorite } from "../../redux/actions/productAct";

const ProductHover = ({ ishover, uid, name, img, price }) => {
  const [active, setactive] = useState(false);
  const dispatch = useDispatch();
  if (ishover === false) {
    return null;
  }

  return (
    <div className={styles.producthover}>
      <div className={styles.addcart}>
        <span>&#xe07a;</span>
      </div>
      <div className={styles.viewproduct}>
        <span>VIEW PRODUCT</span>
      </div>
      {active ? (
        <div
          className={styles.favorite}
          onClick={() => {
            dispatch(removeFavorite({ uid, name, img, price }));
            setactive(false);
          }}
        >
          <span style={{ color: "rgb(226, 74, 73)" }}>&#xe089;</span>
        </div>
      ) : (
        <div
          className={styles.favorite}
          onClick={() => {
            dispatch(addFavorite({ uid, name, img, price }));
            setactive(true);
          }}
        >
          <span>&#xe089;</span>
        </div>
      )}
    </div>
  );
};

export default ProductHover;

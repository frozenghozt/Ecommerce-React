import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductHover.module.scss";
// Actions
import { addFavorite } from "../../redux/actions/productAct";
import { removeFavorite } from "../../redux/actions/productAct";

const ProductHover = ({ ishover, uid, name, img, price }) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite);

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
      {favorite.some((each) => each.uid === uid) ? (
        <div
          className={styles.favorite}
          onClick={() => {
            dispatch(removeFavorite({ uid, name, img, price }));
          }}
        >
          <span style={{ color: "rgb(226, 74, 73)" }}>&#xe089;</span>
        </div>
      ) : (
        <div
          className={styles.favorite}
          onClick={() => {
            dispatch(addFavorite({ uid, name, img, price }));
          }}
        >
          <span>&#xe089;</span>
        </div>
      )}
    </div>
  );
};

export default ProductHover;

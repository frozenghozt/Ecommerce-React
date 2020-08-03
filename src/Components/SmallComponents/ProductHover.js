import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductHover.module.scss";
import {
  addFavorite,
  removeFavorite,
  addCart,
  removeCart,
} from "../../redux/actions/productAct";

const ProductHover = ({ ishover, uid, name, img, price }) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite);
  const cart = useSelector((state) => state.cart);

  if (ishover === false) {
    return null;
  }

  return (
    <div className={styles.producthover}>
      {cart.some((each) => each.uid === uid) ? (
        <div
          className={styles.addcart}
          onClick={() => dispatch(removeCart({ uid, name, img, price }))}
        >
          <span style={{ color: "rgb(226, 74, 73)" }}>&#xe07a;</span>
        </div>
      ) : (
        <div
          className={styles.addcart}
          onClick={() => dispatch(addCart({ uid, name, img, price }))}
        >
          <span>&#xe07a;</span>
        </div>
      )}
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

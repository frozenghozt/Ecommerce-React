import React from "react";
import styles from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/actions/productAct";

const CartItem = ({ uid, name, img, price }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.cartitem}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.wrapper}>
        <div className={styles.nameclose}>
          <span>{name}</span>
          <span onClick={() => dispatch(removeCart({ uid, name, img, price }))}>
            &#x4d;
          </span>
        </div>
        <div className={styles.price}>$ {price}</div>
      </div>
    </div>
  );
};

export default CartItem;

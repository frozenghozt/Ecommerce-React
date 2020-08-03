import React from "react";
import styles from "./CartList.module.scss";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartList = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className={styles.favlist}>
      <div className={styles.wrapper}>
        <span>Your Cart</span>
        {cart.map(({ uid, name, img, price }, i) => (
          <CartItem key={i} uid={uid} name={name} img={img} price={price} />
        ))}
      </div>
    </div>
  );
};

export default CartList;

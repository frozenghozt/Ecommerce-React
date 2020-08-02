import React from "react";
import styles from "./FavoriteItem.module.scss";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../redux/actions/productAct";

const FavoriteItem = ({ uid, name, img, price }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.favitem}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.wrapper}>
        <div className={styles.nameclose}>
          <span>{name}</span>
          <span
            onClick={() => dispatch(removeFavorite({ uid, name, img, price }))}
          >
            &#x4d;
          </span>
        </div>
        <div className={styles.price}>$ {price}</div>
      </div>
    </div>
  );
};

export default FavoriteItem;

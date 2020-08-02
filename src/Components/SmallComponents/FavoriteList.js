import React from "react";
import styles from "./FavoriteList.module.scss";
import FavoriteItem from "./FavoriteItem";
import { useSelector } from "react-redux";

const FavoriteList = () => {
  const favorite = useSelector((state) => state.favorite);

  return (
    <div className={styles.favlist}>
      <div className={styles.wrapper}>
        <span>Your Cart</span>
        {favorite.map(({ uid, name, img, price }) => (
          <FavoriteItem uid={uid} name={name} img={img} price={price} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;

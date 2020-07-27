import React from "react";
import styles from "./Header.module.scss";
import KossyLogo from "../../assets/images/logo.png";
import CartNumber from "../SmallComponents/CartNumber";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src={KossyLogo} alt="Kossy" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Features</li>
          <li>Page</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div className={styles.icons}>
        <div className={styles.search}>&#x55;</div>
        <div className={styles.favorite}>
          &#xe030;
          <CartNumber number={7} />
        </div>
        <div className={styles.cart}>
          &#xe013;
          <CartNumber number={2} />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import KossyLogo from "../../assets/images/logo.png";
import CartNumber from "../SmallComponents/CartNumber";
import { Link } from "react-router-dom";
import CartHover from "../SmallComponents/CartHover";

const Header = () => {
  const favorite = useSelector((state) => state.favorite);
  return (
    <div className={styles.headerContainer}>
      <CartHover />
      <div className={styles.logo}>
        <Link to="/">
          <img src={KossyLogo} alt="Kossy" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="features">Features</Link>
          </li>
          <li>
            <Link to="page">Page</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.icons}>
        <div className={styles.search}>
          <Link to="/search">&#x55;</Link>
        </div>
        <div className={styles.favorite}>
          &#xe030;
          <CartNumber number={favorite.length} />
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

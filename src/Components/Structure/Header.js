import React, { useState } from "react";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import KossyLogo from "../../assets/images/logo.png";
import CartNumber from "../SmallComponents/CartNumber";
import { Link } from "react-router-dom";
import CartHover from "../SmallComponents/CartHover";
import FavoriteList from "../SmallComponents/FavoriteList";

const Header = () => {
  const favorite = useSelector((state) => state.favorite);
  const [isopen, setisopen] = useState(false);

  return (
    <div className={styles.headerContainer}>
      {isopen ? <FavoriteList /> : null}
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
        <div className={styles.login}>&#x7e;</div>
        <div className={styles.favorite} onClick={() => setisopen(!isopen)}>
          {isopen ? (
            <span style={{ color: "red" }}>&#xe089;</span>
          ) : (
            <span>&#xe030;</span>
          )}
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

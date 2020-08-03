import React, { useState } from "react";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import KossyLogo from "../../assets/images/logo.png";
import CartNumber from "../SmallComponents/CartNumber";
import CartList from "../SmallComponents/CartList";
import FavoriteList from "../SmallComponents/FavoriteList";

const Header = () => {
  const favorite = useSelector((state) => state.favorite);
  const cart = useSelector((state) => state.cart);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className={styles.headerContainer}>
      {isFavOpen ? <FavoriteList /> : null}
      {isCartOpen ? <CartList /> : null}
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
        <div
          className={styles.favorite}
          onClick={() => {
            setIsFavOpen(!isFavOpen);
            setIsCartOpen(false);
          }}
        >
          {isFavOpen ? (
            <span style={{ color: "#252525" }}>&#xe089;</span>
          ) : (
            <span>&#xe030;</span>
          )}
          <CartNumber number={favorite.length} />
        </div>
        <div
          className={styles.cart}
          onClick={() => {
            setIsCartOpen(!isCartOpen);
            setIsFavOpen(false);
          }}
        >
          {isCartOpen ? (
            <span style={{ color: "#252525" }}>&#xe079;</span>
          ) : (
            <span>&#xe013;</span>
          )}
          <CartNumber number={cart.length} />
        </div>
      </div>
    </div>
  );
};

export default Header;

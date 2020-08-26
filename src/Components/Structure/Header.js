import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../Hooks/useWindowSize";
import KossyLogo from "../../assets/images/logo.png";
import CartNumber from "../SmallComponents/CartNumber";
import FavoriteList from "../SmallComponents/FavoriteList";
import CartList from "../SmallComponents/CartList";
import MenuList from "../SmallComponents/MenuList";

const Container = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: var(--veryhigh);
  background-color: var(--white);
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  font-size: 15px;
  padding: 0 20px;
  background-color: var(--white);
  @media (min-width: 768px) {
    padding: 0 35px;
    height: 70px;
  }
  @media (min-width: 1024px) {
    height: 100px;
    padding: 0px 50px;
  }
  @media (min-width: 1680px) {
    height: 100px;
    padding: 0px 75px;
  }
`;

const Logo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  img {
    margin-top: 8px;
  }
`;

const Nav = styled.nav`
  display: none;
  justify-content: center;
  align-items: center;
  & ul {
    display: inline-flex;
    padding-inline-start: 0px;
    list-style: none;
    & li {
      cursor: pointer;
      margin: 0px 15px;
      a {
        text-decoration: none;
        color: var(--black);
        font-weight: 500;
      }
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    flex: 1;
  }
`;

const Icons = styled.div`
  display: flex;
  flex: 1;
  font-family: Elegant Icons;
  font-weight: bolder;
  font-size: 16px;
  justify-content: flex-end;
  align-items: center;
`;

const Search = styled.div`
  cursor: pointer;
  margin-top: 4px;
  a {
    text-decoration: none;
    color: var(--black);
  }
`;

const Login = styled.div`
  display: none;
  cursor: pointer;
  margin-top: 4px;
  margin-left: 20px;
  @media (min-width: 768px) {
    margin-left: 30px;
  }
  @media (min-width: 1024px) {
    display: block;
  }
`;

const Favorite = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 20px;
  @media (min-width: 768px) {
    margin-left: 30px;
  }
`;

const Cart = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 20px;
  @media (min-width: 768px) {
    margin-left: 30px;
  }
`;

const Bars = styled.div`
  cursor: pointer;
  margin-left: 20px;
  i > {
    font-size: 25px;
  }
  @media (min-width: 768px) {
    margin-left: 30px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Header = () => {
  const favorite = useSelector((state) => state.favorite);
  const cart = useSelector((state) => state.cart);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (favorite.length < 1) {
      setIsFavOpen(false);
    }
    if (cart.length < 1) {
      setIsCartOpen(false);
    }
  }, [favorite.length, cart.length]);

  useEffect(() => {
    if (width > 1024) {
      setIsMenuOpen(false);
    }
  }, [width]);

  return (
    <Container>
      <Wrapper>
        <FavoriteList open={isFavOpen} />
        <CartList open={isCartOpen} />
        <MenuList open={isMenuOpen} />
        <Logo>
          <Link to="/">
            <img src={KossyLogo} alt="Kossy" />
          </Link>
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/page">Page</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </Nav>
        <Icons>
          <Search>
            <Link to="/search">&#x55;</Link>
          </Search>
          <Login>&#x7e;</Login>
          <Favorite
            onClick={() => {
              setIsFavOpen(!isFavOpen);
              setIsCartOpen(false);
              setIsMenuOpen(false);
            }}
          >
            {isFavOpen ? (
              <span style={{ color: "#252525" }}>&#xe089;</span>
            ) : (
              <span>&#xe030;</span>
            )}
            <CartNumber number={favorite.length} />
          </Favorite>
          <Cart
            onClick={() => {
              setIsCartOpen(!isCartOpen);
              setIsFavOpen(false);
              setIsMenuOpen(false);
            }}
          >
            {isCartOpen ? (
              <span style={{ color: "#252525" }}>&#xe079;</span>
            ) : (
              <span>&#xe013;</span>
            )}
            <CartNumber number={cart.length} />
          </Cart>
          <Bars
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsCartOpen(false);
              setIsFavOpen(false);
            }}
          >
            <i className="fas fa-bars"></i>
          </Bars>
        </Icons>
      </Wrapper>
    </Container>
  );
};

export default Header;

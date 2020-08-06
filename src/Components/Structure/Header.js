import React, { useState } from "react";
import styled from "styled-components";
import { color, font, index } from "../../styled/variables";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import KossyLogo from "../../assets/images/logo.png";
import CartNumber from "../SmallComponents/CartNumber";
import CartList from "../SmallComponents/CartList";
import FavoriteList from "../SmallComponents/FavoriteList";

const HeaderContainer = styled.header`
  display: flex;
  position: sticky;
  z-index: ${index.veryhigh};
  top: 0;
  justify-content: space-between;
  max-width: 100%;
  height: 100px;
  padding: 0px 75px;
  min-height: 100px;
  font-size: 14px;
  background-color: ${color.white};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 33%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34%;
  font-family: ${font.rubikm};
  & ul {
    display: inline-flex;
    padding-inline-start: 0px;
    list-style: none;
    & li {
      cursor: pointer;
      margin: 0px 15px;
      a {
        text-decoration: none;
        color: ${color.black};
      }
    }
  }
`;

const Icons = styled.div`
  display: flex;
  font-family: ${font.icons};
  font-weight: bolder;
  font-size: 16px;
  justify-content: flex-end;
  align-items: center;
  width: 33%;
`;

const Search = styled.div`
  cursor: pointer;
  margin-top: 5px;
  a {
    text-decoration: none;
    color: ${color.black};
  }
`;

const Login = styled.div`
  cursor: pointer;
  margin-left: 30px;
  margin-top: 5px;
`;

const Favorite = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 30px;
`;

const Cart = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 30px;
`;

const Header = () => {
  const favorite = useSelector((state) => state.favorite);
  const cart = useSelector((state) => state.cart);
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <HeaderContainer>
      <FavoriteList open={isFavOpen} />
      <CartList open={isCartOpen} />
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
          }}
        >
          {isCartOpen ? (
            <span style={{ color: "#252525" }}>&#xe079;</span>
          ) : (
            <span>&#xe013;</span>
          )}
          <CartNumber number={cart.length} />
        </Cart>
      </Icons>
    </HeaderContainer>
  );
};

export default Header;

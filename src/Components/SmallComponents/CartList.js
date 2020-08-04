import React from "react";
import styled from "styled-components";
import { color, font } from "../../styled/variables";
import "./FavCartAnime.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

const CartListContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 350px;
  background-color: ${color.white};
  height: calc(100% - 100px);
  z-index: 200;
`;

const Wrapper = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  padding: 25px 50px;
  & > span {
    font-family: ${font.rubikm};
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const TotalCart = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  span {
    font-family: ${font.rubikr};
    font-size: 18px;
    color: ${color.mediumgrey};
    &:nth-child(2) {
      color: ${color.black};
    }
  }
`;

const CheckoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    border: 1px solid black;
    color: ${color.black};
    font-size: 14px;
    padding: 7px 12px;
    background-color: ${color.white};
  }
`;

const CartList = ({ open }) => {
  const cart = useSelector((state) => state.cart);
  const priceCalc = [];
  cart.map((each) => priceCalc.push(each.price));
  console.log(priceCalc);
  return (
    <CSSTransition in={open} timeout={300} classNames="anime" unmountOnExit>
      <CartListContainer>
        <Wrapper>
          <span>Your Cart</span>
          {cart.map(({ uid, name, img, price }, i) => (
            <CartItem key={i} uid={uid} name={name} img={img} price={price} />
          ))}
          <TotalCart>
            <TotalWrapper>
              <span>Subtotal</span>
              <span>$ 42.99</span>
            </TotalWrapper>
            <CheckoutWrapper>
              <button>Edit Cart</button>
              <button>Checkout</button>
            </CheckoutWrapper>
          </TotalCart>
        </Wrapper>
      </CartListContainer>
    </CSSTransition>
  );
};

export default CartList;

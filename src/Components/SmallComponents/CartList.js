import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

const CartListContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: var(--white);
  height: calc(100% - 50px);
  z-index: 200;
  @media (min-width: 768px) {
    height: calc(100% - 70px);
    width: 350px;
  }
  @media (min-width: 1024px) {
    height: calc(100% - 100px);
    width: 350px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px 10%;
  & > span {
    font-weight: var(--rubikm);
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const TotalCart = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  @media (min-width: 1024px) {
    margin-bottom: 50px;
  }
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  span {
    font-size: 18px;
    color: var(--mediumgrey);
    &:nth-child(2) {
      color: var(--black);
    }
  }
`;

const CheckoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    border: 1px solid black;
    color: var(--black);
    font-size: 15px;
    padding: 7px 12px;
    background-color: var(--white);
  }
`;

const CartList = ({ open }) => {
  const cart = useSelector((state) => state.cart);

  const priceCalc = [];
  cart.map((each) => priceCalc.push(each.price));
  const totalCost =
    priceCalc.length > 0 ? priceCalc.reduce((a, b) => a + b) : 0;
  return (
    <CSSTransition
      in={open}
      timeout={300}
      classNames="headermenu"
      unmountOnExit
    >
      <CartListContainer>
        <Wrapper>
          <span>Your Cart</span>
          {cart.map(({ uid, name, img, price, routeUrl }, i) => (
            <CartItem
              key={i}
              uid={uid}
              name={name}
              img={img}
              price={price}
              routeUrl={routeUrl}
            />
          ))}
          <TotalCart>
            <TotalWrapper>
              <span>Subtotal</span>
              <span>$ {totalCost}</span>
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

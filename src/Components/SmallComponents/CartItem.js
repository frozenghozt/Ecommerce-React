import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/actions/productAct";

const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  padding: 7px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.13);
  }
`;

const Image = styled.div`
  height: 65px;
  min-width: 65px;
  border-radius: 3px;
  background-color: #999;
  background-position-x: center;
  background-position-y: -13px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NameClose = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 6px;
  span {
    font-size: 14px;
    &:nth-child(2) {
      font-family: var(--icons);
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

const Price = styled.div`
  width: 100%;
  font-weight: var(--rubikm);
  color: var(--btnpink);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
`;

const CartItem = ({ uid, name, img, price, routeUrl }) => {
  const dispatch = useDispatch();
  return (
    <CartItemContainer>
      <StyledLink to={`/s/${routeUrl}`}>
        <Image style={{ backgroundImage: `url(${img})` }}></Image>
      </StyledLink>
      <Wrapper>
        <NameClose>
          <span>{name}</span>
          <span onClick={() => dispatch(removeCart({ uid, name, img, price }))}>
            &#x4d;
          </span>
        </NameClose>
        <Price>$ {price}</Price>
      </Wrapper>
    </CartItemContainer>
  );
};

export default CartItem;

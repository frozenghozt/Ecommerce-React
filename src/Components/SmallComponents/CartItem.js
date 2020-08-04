import React from "react";
import styled from "styled-components";
import { color, font } from "../../styled/variables";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/actions/productAct";

const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
`;

const Image = styled.div`
  height: 65px;
  min-width: 65px;
  border-radius: 3px;
  background-color: #999;
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
    font-family: ${font.rubikr};
    font-size: 14px;
    &:nth-child(2) {
      font-family: ${font.icons};
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

const Price = styled.div`
  width: 100%;
  font-family: ${font.rubikm};
  color: ${color.btnpink};
`;

const CartItem = ({ uid, name, img, price }) => {
  const dispatch = useDispatch();
  return (
    <CartItemContainer>
      <Image style={{ backgroundImage: `url(${img})` }}></Image>
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

import React from "react";
import styled from "styled-components";
import { font } from "../../styled/variables";

const Bullet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-family: ${font.rubikr};
  font-size: 8px;
  color: #fff;
  border: 1px solid var(--white);
  background-color: red;
  border-radius: 50%;
  height: 14px;
  width: 14px;
  top: 50%;
  left: 50%;
`;

const CartNumber = (props) => {
  return <Bullet>{props.number}</Bullet>;
};

export default CartNumber;

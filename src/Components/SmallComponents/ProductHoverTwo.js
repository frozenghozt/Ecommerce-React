import React from "react";

import styled from "styled-components";

const ProductContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  width: 100%;
  padding: 15px 15px;
  cursor: pointer;
  @media (min-width: 480px) {
    padding: 15px 15px;
  }
  @media (min-width: 576px) {
    padding: 10px 10px;
  }
  @media (min-width: 768px) {
    padding: 15px 15px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const AddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  font-size: 17px;
  border-radius: 50%;
  background-color: #fff;
  font-family: var(--icons);
  color: var(--mediumgrey);
  @media (min-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 15px;
  }
  @media (min-width: 576px) {
    height: 38px;
    width: 38px;
  }
`;

export const AddToFavorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  font-size: 17px;
  border-radius: 50%;
  background-color: #fff;
  font-family: var(--icons);
  color: var(--mediumgrey);
  @media (min-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 15px;
  }
  @media (min-width: 576px) {
    height: 38px;
    width: 38px;
  }
`;

export const ViewProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  font-size: 17px;
  border-radius: 50%;
  background-color: #fff;
  color: var(--mediumgrey);
  @media (min-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 18px;
  }
  @media (min-width: 576px) {
    height: 38px;
    width: 38px;
  }
`;

const ProductHoverTwo = () => {
  return (
    <ProductContainer>
      <AddToCart>&#xe07a;</AddToCart>
      <ViewProduct>
        <i className="fas fa-eye"></i>
      </ViewProduct>
      <AddToFavorite>&#xe089;</AddToFavorite>
    </ProductContainer>
  );
};

export default ProductHoverTwo;

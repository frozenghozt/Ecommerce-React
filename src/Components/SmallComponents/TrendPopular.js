import React from "react";
import styled from "styled-components";
import Tshirt from "../../assets/images/tshirt.jpg";
import ProductName from "./ProductName";
import ProductHover from "./ProductHover";

const Container = styled.picture`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: calc(100% / 1.15);
  padding-bottom: calc(100% / 0.8);
  height: 0;
  @media (min-width: 576px) {
    min-width: calc(100% / 2.3);
    padding-bottom: calc(100% / 1.8);
  }
  @media (min-width: 1024px) {
    min-width: calc(100% / 4);
    padding-bottom: calc(100% / 3);
  }
  > img {
    padding: 0 2px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 80%;
    object-fit: cover;
    @media (min-width: 576px) {
      padding: 0 4px;
    }
    @media (min-width: 1024px) {
      padding: 0 6px;
    }
  }
`;

const TrendProduct = () => {
  return (
    <Container>
      <ProductHover />
      <img src={Tshirt} alt="yo" />
      <ProductName />
    </Container>
  );
};

export default TrendProduct;

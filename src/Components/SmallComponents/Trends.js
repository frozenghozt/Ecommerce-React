import React from "react";
import styled from "styled-components";
import ShowcaseHeader from "./ShowcaseHeader";
import TrendProduct from "./TrendPopular";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  @media (min-width: 768px) {
    padding: 40px 0;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  @media (min-width: 1024px) {
    overflow-x: hidden;
  }
`;

const Trends = () => {
  return (
    <Wrapper>
      <ShowcaseHeader title="Trends" />
      <ProductWrapper>
        <TrendProduct />
        <TrendProduct />
        <TrendProduct />
        <TrendProduct />
        <TrendProduct />
      </ProductWrapper>
    </Wrapper>
  );
};

export default Trends;

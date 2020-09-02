import React, { useContext } from "react";
import styled from "styled-components";
import ShowcaseHeader from "./ShowcaseHeader";
import ProductTrend from "./ProductTrend";
import ProductData from "../../context/ProductContext";

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
  justify-content: flex-start;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: scroll;
  @media (min-width: 1024px) {
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: hidden;
  }
  > div {
    @media (min-width: 1024px) {
      &:nth-last-child(-n + 2) {
        display: none;
      }
    }
  }
`;

const Trends = () => {
  const ArrProduct = useContext(ProductData);
  return (
    <Wrapper>
      <ShowcaseHeader title="Trends" />
      <ProductWrapper>
        {ArrProduct.status === "success" &&
          ArrProduct.data.inventory.map(
            (
              {
                id,
                uid,
                name,
                sku,
                routeUrl,
                price,
                prevprice,
                img,
                hot,
                colors,
              },
              i
            ) =>
              i < 10 ? (
                <ProductTrend
                  key={id}
                  uid={uid}
                  name={name}
                  sku={sku}
                  routeUrl={routeUrl}
                  price={price}
                  prevprice={prevprice}
                  img={img}
                  hot={hot}
                  colors={colors}
                />
              ) : null
          )}
      </ProductWrapper>
    </Wrapper>
  );
};

export default Trends;

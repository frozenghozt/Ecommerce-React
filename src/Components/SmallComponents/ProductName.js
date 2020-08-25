import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  align-items: center;
  > span {
    font-size: 26px;
  }
`;

const PriceWrapper = styled.div`
  margin-left: auto;
  font-size: 20px;
  > span {
    margin-right: 5px;
    &:nth-child(2) {
      color: rgb(210, 210, 210);
      margin-left: 13px;
      text-decoration: line-through;
    }
  }
`;

const ProductName = ({ name, price, prevprice }) => {
  return (
    <Container>
      <Wrapper>
        <span>{name}</span>
        <PriceWrapper>
          <span>$ {price}</span>
          {prevprice ? <span>{prevprice}</span> : null}
        </PriceWrapper>
      </Wrapper>
    </Container>
  );
};

export default ProductName;

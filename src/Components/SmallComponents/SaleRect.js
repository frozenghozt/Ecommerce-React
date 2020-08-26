import React from "react";
import styled from "styled-components";

const SaleRectContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: var(--white);
  font-weight: var(--rubikm);
  font-size: 12px;
  background-color: var(--btngreen);
  padding: 6px 10px 4px 10px;
  @media (min-width: 480px) {
    padding: 8px 12px 6px 12px;
  }
`;

const SaleRect = () => {
  return <SaleRectContainer>SALE</SaleRectContainer>;
};

export default SaleRect;

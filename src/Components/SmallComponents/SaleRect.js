import React from "react";
import styled from "styled-components";

const SaleRectContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: var(--white);
  font-weight: var(--rubikm);
  padding: 8px 12px 6px 12px;
  font-size: 12px;
  background-color: var(--btngreen);
`;

const SaleRect = () => {
  return <SaleRectContainer>SALE</SaleRectContainer>;
};

export default SaleRect;

import React from "react";
import styled from "styled-components";
import { color, font } from "../../styled/variables";

const SaleRectContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: ${color.white};
  font-family: ${font.rubikm};
  border-bottom-right-radius: 5px;
  padding: 5px 12px;
  font-size: 12px;
  background-color: ${color.btngreen};
`;

const SaleRect = () => {
  return <SaleRectContainer>SALE</SaleRectContainer>;
};

export default SaleRect;

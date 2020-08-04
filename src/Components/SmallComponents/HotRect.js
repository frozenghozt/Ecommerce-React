import React from "react";
import styled from "styled-components";
import { color, font } from "../../styled/variables";

const HotRectContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: ${color.white};
  font-family: ${font.rubikm};
  border-bottom-left-radius: 5px;
  padding: 5px 12px;
  font-size: 12px;
  background-color: ${color.btnpink};
`;

const HotRect = () => {
  return <HotRectContainer>HOT</HotRectContainer>;
};

export default HotRect;

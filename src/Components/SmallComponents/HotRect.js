import React from "react";
import styled from "styled-components";

const HotRectContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: var(--white);
  font-weight: var(--rubikm);
  padding: 8px 12px 6px 12px;
  font-size: 12px;
  background-color: var(--btnpink);
`;

const HotRect = () => {
  return <HotRectContainer>HOT</HotRectContainer>;
};

export default HotRect;

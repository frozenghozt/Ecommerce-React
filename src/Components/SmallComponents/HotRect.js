import React from "react";
import styled from "styled-components";

const HotRectContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: var(--white);
  font-weight: var(--rubikm);
  font-size: 12px;
  background-color: var(--btnpink);
  padding: 6px 10px 4px 10px;
  @media (min-width: 480px) {
    padding: 8px 12px 6px 12px;
  }
`;

const HotRect = () => {
  return <HotRectContainer>HOT</HotRectContainer>;
};

export default HotRect;

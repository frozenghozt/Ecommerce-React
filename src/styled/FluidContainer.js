import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 10px;
  @media (min-width: 480px) {
    padding: 0 20px;
  }
  @media (min-width: 1366px) {
    padding: 40px;
  }
`;

const FluidContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default FluidContainer;

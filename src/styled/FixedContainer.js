import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
  @media (min-width: 480px) {
    padding: 0 20px;
  }
  @media (min-width: 1366px) {
    padding: 0;
  }
`;

const FixeContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default FixeContainer;

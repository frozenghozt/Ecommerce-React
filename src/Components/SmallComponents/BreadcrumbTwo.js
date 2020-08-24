import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BreadcrumbContainer = styled.div`
  background-color: var(--lightgrey);
  padding: 70px 0px;
  text-align: center;
  color: var(--black);
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
`;

const BreadcrumbTwo = () => {
  return (
    <BreadcrumbContainer>
      <span>
        <StyledLink to="/">Home</StyledLink> -
        <StyledLink to="/shop"> Shop</StyledLink>
      </span>
    </BreadcrumbContainer>
  );
};

export default BreadcrumbTwo;

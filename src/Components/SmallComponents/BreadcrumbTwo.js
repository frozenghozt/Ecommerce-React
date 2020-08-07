import React from "react";
import styled from "styled-components";
import { color } from "../../styled/variables";
import { Link } from "react-router-dom";

const BreadcrumbContainer = styled.div`
  background-color: ${color.lightgrey};
  padding: 70px 0px;
  text-align: center;
  color: ${color.black};
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${color.black};
`;

const BreadcrumbTwo = ({ name }) => {
  return (
    <BreadcrumbContainer>
      <span>
        <StyledLink to="/">Home</StyledLink> -
        <StyledLink to="/shop">Shop</StyledLink> - {name}
      </span>
    </BreadcrumbContainer>
  );
};

export default BreadcrumbTwo;

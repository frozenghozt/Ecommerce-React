import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 100%;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0px 20px 0px;
  span {
    font-size: 15px;
    cursor: pointer;
    margin-right: 35px;
    color: var(--black);
    &:nth-child(3) {
      margin-right: 0px;
    }
  }
`;

const DescriptionNav = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <span>Description</span>
        <span>Additional Information</span>
        <span>Reviews</span>
      </NavWrapper>
    </NavContainer>
  );
};

export default DescriptionNav;

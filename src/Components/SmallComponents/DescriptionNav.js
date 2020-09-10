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

const DescriptionNav = ({ tabSetter, activetab }) => {
  return (
    <NavContainer>
      <NavWrapper>
        <span
          onClick={() => tabSetter("Description")}
          style={{ fontWeight: activetab === "Description" ? "500" : "400" }}
        >
          Description
        </span>
        <span
          onClick={() => tabSetter("Additional")}
          style={{ fontWeight: activetab === "Additional" ? "500" : "400" }}
        >
          Additional Information
        </span>
        <span
          onClick={() => tabSetter("Reviews")}
          style={{ fontWeight: activetab === "Reviews" ? "500" : "400" }}
        >
          Reviews
        </span>
      </NavWrapper>
    </NavContainer>
  );
};

export default DescriptionNav;

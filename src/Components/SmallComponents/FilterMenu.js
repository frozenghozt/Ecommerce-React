import React from "react";
import styled from "styled-components";

const FilterMenuContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0px;
  font-size: 15px;
  @media (min-width: 480px) {
    padding: 30px 0px;
  }
  @media (min-width: 1024px) {
    padding: 40px 0px;
  }
`;

const Title = styled.h3`
  flex: 2;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 400;
  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;

const FilterToggle = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & span {
    cursor: pointer;
  }
`;

const ArrowDown = styled.span`
  font-family: var(--icons);
`;

const FilterMenu = ({ opener }) => {
  return (
    <FilterMenuContainer>
      <Title>Shoes</Title>
      <FilterToggle onClick={opener}>
        <span>Filter</span>
        <ArrowDown>&#x33;</ArrowDown>
      </FilterToggle>
    </FilterMenuContainer>
  );
};

export default FilterMenu;

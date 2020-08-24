import React from "react";
import styled from "styled-components";

const FilterMenuContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 0px;
  margin: 32px 0px 0px 0px;
  font-size: 14px;
`;

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
  & span {
    cursor: pointer;
  }
`;

const FilterToggle = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 55%;
  & span {
    cursor: pointer;
  }
`;

const ArrowDown = styled.span`
  font-family: var(--icons);
`;

const FilterMenu = ({ toggler, sorter }) => {
  return (
    <FilterMenuContainer>
      <Filters>
        <span onClick={() => sorter("All")}>All Products</span>
        <span onClick={() => sorter("Best")}>Best Sellers</span>
        <span onClick={() => sorter("New")}>New Arrival</span>
        <span onClick={() => sorter("Sales")}>Sales Products</span>
        <span onClick={() => sorter("Popular")}>Popular</span>
      </Filters>
      <FilterToggle onClick={toggler}>
        <span>Filter</span>
        <ArrowDown>&#x33;</ArrowDown>
      </FilterToggle>
    </FilterMenuContainer>
  );
};

export default FilterMenu;

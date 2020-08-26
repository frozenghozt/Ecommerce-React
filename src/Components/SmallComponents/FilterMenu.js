import React from "react";
import styled from "styled-components";

const FilterMenuContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0px;
  font-size: 14px;
  @media (min-width: 480px) {
    margin: 0;
    padding: 30px 0px;
  }
  @media (min-width: 1024px) {
    margin-top: 32px;
    padding: 40px 0px;
  }
`;

const Filters = styled.div`
  flex: 2;
  display: none;
  justify-content: space-between;
  & span {
    cursor: pointer;
    margin-right: 0;
    @media (min-width: 1024px) {
      margin-right: 35px;
    }
  }
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const FilterToggle = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  & span {
    cursor: pointer;
  }
`;

const ArrowDown = styled.span`
  font-family: var(--icons);
`;

const FilterMenu = ({ opener, sorter }) => {
  return (
    <FilterMenuContainer>
      <Filters>
        <span onClick={() => sorter("All")}>All Products</span>
        <span onClick={() => sorter("Best")}>Best Sellers</span>
        <span onClick={() => sorter("New")}>New Arrival</span>
        <span onClick={() => sorter("Sales")}>Sales Products</span>
        <span onClick={() => sorter("Popular")}>Popular</span>
      </Filters>
      <FilterToggle onClick={opener}>
        <span>Filter</span>
        <ArrowDown>&#x33;</ArrowDown>
      </FilterToggle>
    </FilterMenuContainer>
  );
};

export default FilterMenu;

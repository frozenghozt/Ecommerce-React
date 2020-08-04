import React from "react";
import styled from "styled-components";
import { font } from "../../styled/variables";

const FilterMenuContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 0px;
  margin: 32px 0px 0px 0px;
  font-family: ${font.rubikr};
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
  font-family: ${font.rubikr};
  justify-content: flex-end;
  width: 55%;
  & span {
    cursor: pointer;
  }
`;

const ArrowDown = styled.span`
  font-family: ${font.icons};
`;

const FilterMenu = () => {
  return (
    <FilterMenuContainer>
      <Filters>
        <span>All Products</span>
        <span>Best Sellers</span>
        <span>New Arrival</span>
        <span>Sales Products</span>
        <span>Popular</span>
      </Filters>
      <FilterToggle>
        <span>Filter</span>
        <ArrowDown>&#x33;</ArrowDown>
      </FilterToggle>
    </FilterMenuContainer>
  );
};

export default FilterMenu;

import React from "react";
import styled from "styled-components";
import FilterMenu from "../SmallComponents/FilterMenu";
import FilterLine from "../SmallComponents/FilterLine";
import Filters from "../SmallComponents/Filters";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Filter = () => {
  return (
    <FilterContainer>
      <FilterMenu />
      <FilterLine />
      <Filters />
    </FilterContainer>
  );
};

export default Filter;

import React from "react";
import styled from "styled-components";
import FilterMenu from "../SmallComponents/FilterMenu";
import FilterLine from "../SmallComponents/FilterLine";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Filter = ({ sorter, opener }) => {
  return (
    <FilterContainer>
      <FilterMenu opener={opener} sorter={sorter} />
      <FilterLine />
    </FilterContainer>
  );
};

export default Filter;

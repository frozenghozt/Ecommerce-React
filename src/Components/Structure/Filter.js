import React, { useState } from "react";
import styled from "styled-components";
import FilterMenu from "../SmallComponents/FilterMenu";
import FilterLine from "../SmallComponents/FilterLine";
import Filters from "../SmallComponents/Filters";

const FilterContainer = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Overflow = styled.div`
  overflow: hidden;
`;

const Filter = ({ sorter }) => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const toggler = () => {
    setFilterIsOpen(!filterIsOpen);
  };

  return (
    <FilterContainer>
      <FilterMenu toggler={toggler} sorter={sorter} />
      <FilterLine />
      <Overflow>
        <Filters open={filterIsOpen} />
      </Overflow>
    </FilterContainer>
  );
};

export default Filter;

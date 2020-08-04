import React from "react";
import styled from "styled-components";
import { color, font } from "../../styled/variables";

const SearchContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: rgb(247, 247, 247);
  justify-content: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  padding-top: 120px;
  & input {
    padding: 13px 10px;
    border: 1px solid ${color.mediumgrey};
    &:focus {
      outline: none;
    }
  }
`;

const TitleClose = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  span {
    font-family: ${font.rubikr};
    font-size: 24px;
    color: ${color.black};
    &:nth-child(2) {
      font-family: ${font.icons};
      color: ${color.btnpink};
      font-size: 24px;
      cursor: pointer;
    }
  }
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchWrapper>
        <TitleClose>
          <span>Search</span>
          <span>&#x4d;</span>
        </TitleClose>
        <input placeholder="Search here" />
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Search;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 2px 25px;
  @media (min-width: 576px) {
    padding: 30px 4px 25px;
  }
  @media (min-width: 768px) {
    padding: 40px 4px;
  }
  @media (min-width: 1024px) {
    padding: 40px 6px;
  }
`;

const Headline = styled.div`
  display: flex;
  align-items: center;
  > h2 {
    color: var(--black);
    font-size: 24px;
    font-weight: 400;
    @media (min-width: 768px) {
      font-size: 35px;
    }
  }
`;

const Redirect = styled.div`
  display: flex;
  align-items: center;
  color: var(--black);
  span {
    font-weight: 400;
    font-size: 15px;
    &:nth-last-child(1) {
      margin-left: 8px;
      cursor: pointer;
    }
  }
`;

const ShowcaseHeader = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <Headline>
          <h2>{title}</h2>
        </Headline>
        <Redirect>
          <span>ALL PRODUCTS</span>
          <span>
            <i className="fas fa-arrow-right"></i>
          </span>
        </Redirect>
      </Wrapper>
    </Container>
  );
};

export default ShowcaseHeader;

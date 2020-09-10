import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/banner.jpg";
import FixedContainer from "../../styled/FixedContainer";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bannerImage});
  background-position-x: right;
  background-position-y: center;
  background-size: cover;
  width: 100%;
  height: 550px;
  @media (min-width: 768px) {
    height: 760px;
  }
  background-color: var(--white);
`;

const TextWrapper = styled.div`
  width: 100%;
  > span {
    font-size: 42px;
    color: var(--black);
  }
  > p {
    margin: 20px 0px 30px 0px;
    color: var(--mediumgrey);
  }
  & button {
    color: var(--white);
    cursor: pointer;
    font-size: 15px;
    font-weight: var(--rubikm);
    background-color: var(--btnpink);
    border-style: none;
    padding: 13px 24px 12px 24px;
  }
  @media (min-width: 768px) {
    > span {
      font-size: 60px;
    }
    > button {
      font-size: 14px;
      padding: 15px 26px 13px 26px;
    }
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
`;

const Banner = () => {
  return (
    <BannerContainer>
      <FixedContainer>
        <TextWrapper>
          <span>
            SPRING SALE <span style={{ color: "red" }}>30%</span>
          </span>
          <p>
            Shop the latest women's clothes at Kossy and keep your style game
            strong with the freshest threads landing daily. Shopping is a right,
            not a luxury.
          </p>
          <StyledLink to="/shop">
            <button> SHOP NOW </button>
          </StyledLink>
        </TextWrapper>
      </FixedContainer>
    </BannerContainer>
  );
};

export default Banner;

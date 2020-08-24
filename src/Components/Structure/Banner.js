import React from "react";
import styled from "styled-components";
import bannerImage from "../../assets/images/banner.jpg";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bannerImage});
  background-position-x: right;
  background-position-y: center;
  background-size: cover;
  width: 100%;
  height: 800px;
  min-height: 800px;
  max-height: 800px;
  background-color: var(--white);
  & span {
    font-size: 60px;
    color: var(--black);
  }
  & p {
    margin: 20px 0px 30px 0px;
    color: var(--mediumgrey);
  }
  & button {
    color: var(--white);
    cursor: pointer;
    font-size: 14px;
    font-weight: var(--rubikm);
    background-color: var(--btnpink);
    border-style: none;
    padding: 15px 26px 13px 26px;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <Container fixed>
        <Grid item md={6} sm={12}>
          <span>
            SPRING SALE <span style={{ color: "red" }}>30%</span>
          </span>
          <p>
            Shop the latest women's clothes at Kossy and keep your style game
            strong with the freshest threads landing daily. Shopping is a right,
            not a luxury.
          </p>
          <button>SHOP NOW</button>
        </Grid>
      </Container>
    </BannerContainer>
  );
};

export default Banner;

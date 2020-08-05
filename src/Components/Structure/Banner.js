import React from "react";
import styled from "styled-components";
import { color, font } from "../../styled/variables";
import bannerImage from "../../assets/images/banner.jpg";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${font.rubikm};
  background-image: url(${bannerImage});
  background-position-x: right;
  background-position-y: center;
  background-size: cover;
  width: 100%;
  height: 800px;
  min-height: 800px;
  max-height: 800px;
  background-color: ${color.white};
  & span {
    font-size: 60px;
    color: ${color.black};
  }
  & p {
    font-family: ${font.rubikr};
    margin: 20px 0px 30px 0px;
    color: ${color.mediumgrey};
  }
  & button {
    color: ${color.white};
    cursor: pointer;
    font-size: 14px;
    font-family: ${font.rubikm};
    background-color: ${color.btnpink};
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

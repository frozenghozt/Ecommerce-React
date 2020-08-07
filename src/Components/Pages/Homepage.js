import React from "react";
import styled from "styled-components";
import Banner from "../Structure/Banner";
import Filter from "../Structure/Filter";
import Products from "../Structure/Products";
import Seals from "../Structure/Seals";
import Newsletter from "../Structure/Newsletter";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

const HomePageStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Homepage = () => {
  window.scrollTo(0, 0); // Scroll top when mounted
  return (
    <HomePageStyle>
      <Banner />
      <Container maxWidth="lg">
        <Hidden mdDown>
          <Filter />
        </Hidden>
        <Products />
        <Seals />
      </Container>
      <Newsletter />
    </HomePageStyle>
  );
};

export default Homepage;

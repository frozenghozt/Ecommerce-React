import React from "react";
import styled from "styled-components";
import Banner from "../Structure/Banner";
import Categories from "../Structure/Categories";
import Filter from "../Structure/Filter";
import Products from "../Structure/Products";
import Seals from "../Structure/Seals";
import Newsletter from "../Structure/Newsletter";
import Container from "@material-ui/core/Container";

const HomePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Homepage = () => {
  window.scrollTo(0, 0); // Scroll top when mounted
  return (
    <HomePageStyle>
      <Banner />
      <Categories />
      <Container maxWidth="lg">
        <Filter />
        <Products />
        <Seals />
      </Container>
      <Newsletter />
    </HomePageStyle>
  );
};

export default Homepage;

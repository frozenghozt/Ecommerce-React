import React from "react";
import styled from "styled-components";
import BreadcrumbTwo from "../SmallComponents/BreadcrumbTwo";
import Filter from "../Structure/Filter";
import Products from "../Structure/Products";
import Container from "@material-ui/core/Container";

const ShopPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShopPage = () => {
  window.scrollTo(0, 0); // Scroll top when mounted

  return (
    <ShopPageContainer>
      <BreadcrumbTwo />
      <Container maxWidth="lg">
        <Filter />
        <Products />
      </Container>
    </ShopPageContainer>
  );
};

export default ShopPage;

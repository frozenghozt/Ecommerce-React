import React from "react";
import styled from "styled-components";
import ProductDetail from "../Structure/ProductDetail";
import Breadcrumb from "../SmallComponents/Breadcrumb";
import FilterLine from "../SmallComponents/FilterLine";
import ProductDescription from "../Structure/ProductDescription";
import Container from "@material-ui/core/Container";

const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductPage = (props) => {
  console.log(props);
  return (
    <ProductPageContainer>
      <Breadcrumb />
      <Container maxWidth="lg">
        <ProductDetail />
        <FilterLine />
        <ProductDescription />
        <FilterLine />
      </Container>
    </ProductPageContainer>
  );
};

export default ProductPage;

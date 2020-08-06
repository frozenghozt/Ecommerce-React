import React from "react";
import styled from "styled-components";
import ProductDetail from "../Structure/ProductDetail";
import Breadcrumb from "../SmallComponents/Breadcrumb";
import FilterLine from "../SmallComponents/FilterLine";
import ProductDescription from "../Structure/ProductDescription";
import Container from "@material-ui/core/Container";
import { useQuery } from "react-query";

const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const fetchProducts = async () => {
  const res = await fetch("/api/inventory");
  return res.json();
};

const ProductPage = (props) => {
  const { data, status } = useQuery("products", fetchProducts);

  const isolatedProduct =
    status === "success"
      ? data.inventory.filter(
          (each) => each.routeUrl === props.match.params.routeUrl
        )
      : null;

  console.log(data);
  console.log(status);

  return (
    <ProductPageContainer>
      <Breadcrumb />
      <Container maxWidth="lg">
        {status === "success" &&
          isolatedProduct.map(({ id, uid, name, sku, price, img, sideimg }) => (
            <ProductDetail
              key={id}
              uid={uid}
              name={name}
              sku={sku}
              price={price}
              img={img}
              sideimg={sideimg}
            />
          ))}
        <FilterLine />
        <ProductDescription />
        <FilterLine />
      </Container>
    </ProductPageContainer>
  );
};

export default ProductPage;

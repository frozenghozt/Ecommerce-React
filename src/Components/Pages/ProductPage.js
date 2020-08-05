import React, { useEffect } from "react";
import axios from "axios";
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
  const [data, setdata] = React.useState({ inventory: [] });

  useEffect(() => {
    axios
      .get("/api/inventory")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  const isolatedProduct = data.inventory.filter(
    (each) => each.routeUrl === props.match.params.routeUrl
  );

  return (
    <ProductPageContainer>
      <Breadcrumb />
      <Container maxWidth="lg">
        {isolatedProduct.map(({ id, uid, name, sku, price, img, sideimg }) => (
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

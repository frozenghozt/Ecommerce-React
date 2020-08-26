import React from "react";
import styled from "styled-components";
import { Server } from "miragejs";
import productObj from "../../dbObjects/ProductsObj";
import Product from "../SmallComponents/Product";
import VerticalFilter from "../Structure/VerticalFilter";
import { useQuery } from "react-query";

const ProductsContainer = styled.div`
  display: flex;
`;

const ProductsWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media (min-width: 480px) {
    margin-top: 40px;
  }
`;

let server = new Server();
server.get("/api/inventory", productObj);

const fetchProducts = async () => {
  const res = await fetch("/api/inventory");
  return res.json();
};

const Products = ({ tosort, isOpen }) => {
  const { data, status } = useQuery("products", fetchProducts);

  function compare(a, b) {
    if (
      a.tags.includes(`${tosort}`) === true &&
      b.tags.includes(`${tosort}`) === false
    ) {
      return -1;
    }
    if (
      a.tags.includes(`${tosort}`) === false &&
      b.tags.includes(`${tosort}`) === true
    ) {
      return 1;
    }
    return 0;
  }

  return (
    <ProductsContainer>
      {isOpen ? <VerticalFilter /> : null}
      <ProductsWrapper>
        {status === "success" &&
          data.inventory
            .sort(compare)
            .map(
              ({
                id,
                uid,
                name,
                sku,
                routeUrl,
                price,
                prevprice,
                img,
                hot,
                colors,
              }) => (
                <Product
                  key={id}
                  uid={uid}
                  name={name}
                  sku={sku}
                  routeUrl={routeUrl}
                  price={price}
                  prevprice={prevprice}
                  img={img}
                  hot={hot}
                  colors={colors}
                />
              )
            )}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;

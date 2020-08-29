import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Server } from "miragejs";
import { useQuery } from "react-query";
import productObj from "../../dbObjects/ProductsObj";
import Product from "../SmallComponents/Product";
import VerticalFilter from "../Structure/VerticalFilter";

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
  const params = useLocation().search;

  function sorting(a, b) {
    if (
      a.tags.includes(params.slice(6)) === true &&
      b.tags.includes(params.slice(6)) === false
    ) {
      return -1;
    }
    if (
      a.tags.includes(params.slice(6)) === false &&
      b.tags.includes(params.slice(6)) === true
    ) {
      return 1;
    }
    return 0;
  }

  return (
    <ProductsContainer>
      <VerticalFilter isOpen={isOpen} />
      <ProductsWrapper>
        {status === "success" &&
          data.inventory
            .sort(sorting)
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

import React from "react";
import styled from "styled-components";
import { Server } from "miragejs";
import productObj from "../../dbObjects/ProductsObj";
import Product from "../SmallComponents/Product";
import { useQuery } from "react-query";

const ProductsContainer = styled.div`
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

let server = new Server();
server.get("/api/inventory", productObj);

const fetchProducts = async () => {
  const res = await fetch("/api/inventory");
  return res.json();
};

const Products = ({ tosort }) => {
  const { data, status } = useQuery("products", fetchProducts);

  // window.addEventListener("scroll", () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   ) {
  //     return;
  //   } else {
  //     sethowmany(howmany + 12);
  //   }
  // });

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
    </ProductsContainer>
  );
};

export default Products;

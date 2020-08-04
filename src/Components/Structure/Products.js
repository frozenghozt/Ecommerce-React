import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Product from "../SmallComponents/Product";
import { Server } from "miragejs";
import productObj from "../../dbObjects/ProductsObj";

const ProductsContainer = styled.div`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

let server = new Server();
server.get("/api/inventory", productObj);

const Products = () => {
  const [data, setdata] = React.useState({ inventory: [] });

  useEffect(() => {
    axios
      .get("/api/inventory")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductsContainer>
      {data.inventory.map(
        ({ id, uid, name, price, prevprice, img, hot, colors }) => (
          <Product
            key={id}
            uid={uid}
            name={name}
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

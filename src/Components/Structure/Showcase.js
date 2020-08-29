import React from "react";
import { Server } from "miragejs";
import { useQuery } from "react-query";
import productObj from "../../dbObjects/ProductsObj";
import styled from "styled-components";
import Popular from "../SmallComponents/Popular";
import Trends from "../SmallComponents/Trends";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

let server = new Server();
server.get("/api/inventory", productObj);

const fetchProducts = async () => {
  const res = await fetch("/api/inventory");
  return res.json();
};

const Showcase = () => {
  const { data, status } = useQuery("products", fetchProducts);

  return (
    <Container>
      <Popular data={data} status={status} />
      <Trends data={data} status={status} />
    </Container>
  );
};

export default Showcase;

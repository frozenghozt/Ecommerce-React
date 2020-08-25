import React from "react";
import styled from "styled-components";
import OwnContainer from "../../styled/OwnContainer";
import ProductName from "../SmallComponents/ProductName";
import ProductDetail from "../Structure/ProductDetail";
import Breadcrumb from "../SmallComponents/Breadcrumb";
import FilterLine from "../SmallComponents/FilterLine";
import ProductDescription from "../Structure/ProductDescription";
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
  window.scrollTo(0, 0); // Scroll top when mounted

  const isolatedProduct =
    status === "success"
      ? data.inventory.filter(
          (each) => each.routeUrl === props.match.params.routeUrl
        )
      : null;

  return (
    <ProductPageContainer>
      {status === "success" &&
        isolatedProduct.map(({ name }, i) => (
          <Breadcrumb key={i} name={name} />
        ))}
      <OwnContainer>
        {status === "success" &&
          isolatedProduct.map(({ name, price, prevprice }, i) => (
            <ProductName
              key={i}
              name={name}
              price={price}
              prevprice={prevprice}
            />
          ))}
        {status === "success" &&
          isolatedProduct.map(
            ({ id, uid, name, sku, price, prevprice, img, sideimg }) => (
              <ProductDetail
                key={id}
                uid={uid}
                name={name}
                sku={sku}
                price={price}
                prevprice={prevprice}
                img={img}
                sideimg={sideimg}
              />
            )
          )}
        <FilterLine />
        <ProductDescription />
        <FilterLine />
      </OwnContainer>
    </ProductPageContainer>
  );
};

export default ProductPage;

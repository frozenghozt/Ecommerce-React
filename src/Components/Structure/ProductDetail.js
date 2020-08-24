import React from "react";
import styled from "styled-components";
import DetailsImage from "../SmallComponents/DetailsImage";
import DetailsInfo from "../SmallComponents/DetailsInfo";

const DetailsContainer = styled.div`
  display: flex;
  padding: 50px 0px 60px 0px;
`;

const ProductDetail = ({ img, sideimg, uid, name, sku, price, prevprice }) => {
  return (
    <DetailsContainer>
      <DetailsImage img={img} sideimg={sideimg} />
      <DetailsInfo
        uid={uid}
        name={name}
        sku={sku}
        price={price}
        prevprice={prevprice}
        img={img}
      />
    </DetailsContainer>
  );
};

export default ProductDetail;

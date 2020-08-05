import React from "react";
import styled from "styled-components";
import DetailsImage from "../SmallComponents/DetailsImage";
import DetailsInfo from "../SmallComponents/DetailsInfo";

const DetailsContainer = styled.div`
  display: flex;
  padding: 50px 0px 60px 0px;
`;

const ProductDetail = () => {
  return (
    <DetailsContainer>
      <DetailsImage />
      <DetailsInfo />
    </DetailsContainer>
  );
};

export default ProductDetail;

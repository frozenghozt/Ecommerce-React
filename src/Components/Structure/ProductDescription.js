import React from "react";
import styled from "styled-components";
import DescriptionNav from "../SmallComponents/DescriptionNav";
import DescriptionText from "../SmallComponents/DescriptionText";

const DescriptionContainer = styled.div`
  width: 100%;
`;

const ProductDescription = () => {
  return (
    <DescriptionContainer>
      <DescriptionNav />
      <DescriptionText />
    </DescriptionContainer>
  );
};

export default ProductDescription;

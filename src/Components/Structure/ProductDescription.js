import React, { useState } from "react";
import styled from "styled-components";
import DescriptionNav from "../SmallComponents/DescriptionNav";
import DescriptionText from "../SmallComponents/DescriptionText";

const DescriptionContainer = styled.div`
  width: 100%;
`;

const ProductDescription = () => {
  const [activetab, setactivetab] = useState("Description");

  const tabSetter = (tabname) => {
    setactivetab(tabname);
  };

  return (
    <DescriptionContainer>
      <DescriptionNav tabSetter={tabSetter} activetab={activetab} />
      <DescriptionText activetab={activetab} />
    </DescriptionContainer>
  );
};

export default ProductDescription;

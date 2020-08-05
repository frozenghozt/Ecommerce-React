import React from "react";
import styled from "styled-components";
import { color } from "../../styled/variables";

const BreadcrumbContainer = styled.div`
  background-color: ${color.lightgrey};
  padding: 25px 0px;
  text-align: center;
  color: ${color.black};
  font-size: 14px;
`;

const Breadcrumb = () => {
  return (
    <BreadcrumbContainer>
      <span>Home - Shop - Product Detail</span>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;

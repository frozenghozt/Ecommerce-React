import React from "react";
import styled from "styled-components";
import BreadcrumbTwo from "../SmallComponents/BreadcrumbTwo";
import Filter from "../Structure/Filter";
import Products from "../Structure/Products";
import OwnContainer from "../../styled/OwnContainer";

const ShopPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShopPage = () => {
  window.scrollTo(0, 0); // Scroll top when mounted
  const [sort, setsort] = React.useState("");

  const sorter = (categorie) => {
    setsort(categorie);
  };

  return (
    <ShopPageContainer>
      <BreadcrumbTwo />
      <OwnContainer>
        <Filter sorter={sorter} />
        <Products tosort={sort} />
      </OwnContainer>
    </ShopPageContainer>
  );
};

export default ShopPage;

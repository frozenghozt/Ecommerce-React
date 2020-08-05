import React from "react";
import styled from "styled-components";
import { color } from "../../styled/variables";
import SideImage from "./SideImage";

const DetailsImageContainer = styled.div`
  width: 50%;
`;

const ImageWrapper = styled.div`
  display: flex;
`;

const MainImage = styled.div`
  height: 570px;
  width: 100%;
  background-color: ${color.mediumgrey};
  background-image: url("https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-5150aab0-88d1-4b92-ac2a-34d9d7710163/calzado-air-max-verona-JF64LJ.jpg");
  background-size: cover;
  background-position-y: bottom;
  background-repeat: no-repeat;
`;

const SideImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsImage = () => {
  return (
    <DetailsImageContainer>
      <ImageWrapper>
        <SideImageWrapper>
          <SideImage />
          <SideImage />
          <SideImage />
        </SideImageWrapper>
        <MainImage></MainImage>
      </ImageWrapper>
    </DetailsImageContainer>
  );
};

export default DetailsImage;

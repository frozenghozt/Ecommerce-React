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
  background-size: cover;
  background-position-y: bottom;
  background-repeat: no-repeat;
`;

const SideImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsImage = ({ sideimg, img }) => {
  return (
    <DetailsImageContainer>
      <ImageWrapper>
        <SideImageWrapper>
          {sideimg.map((each, i) => (
            <SideImage key={i} img={each} />
          ))}
        </SideImageWrapper>
        <MainImage style={{ backgroundImage: `url(${img})` }}></MainImage>
      </ImageWrapper>
    </DetailsImageContainer>
  );
};

export default DetailsImage;

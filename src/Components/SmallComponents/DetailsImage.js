import React from "react";
import styled from "styled-components";
import SideImage from "./SideImage";

const DetailsImageContainer = styled.div`
  width: 50%;
`;

const ImageWrapper = styled.div`
  display: flex;
`;

const MainImage = styled.div`
  height: 0;
  padding-bottom: 92.5%;
  width: 100%;
  background-size: cover;
  background-position-x: center;
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

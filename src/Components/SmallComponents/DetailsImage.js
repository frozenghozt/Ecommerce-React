import React from "react";
import styled from "styled-components";
import SideImage from "./SideImage";

const DetailsImageContainer = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const ImageWrapper = styled.div`
  display: block;
  position: relative;
  @media (min-width: 1024px) {
    display: flex;
    position: static;
  }
`;

const MainImage = styled.div`
  height: 0;
  padding-bottom: 100%;
  width: 100%;
  background-size: cover;
  background-position-x: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
  @media (min-width: 1024px) {
    padding-bottom: 92.5%;
  }
`;

const SideImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  margin: 0;
  justify-content: space-between;
  @media (min-width: 480px) {
    margin: 15px;
    justify-content: flex-start;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
    position: static;
    margin: 0;
  }
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

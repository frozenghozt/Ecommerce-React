import React from "react";
import styled from "styled-components";

const SideImageContainer = styled.div`
  height: 80px;
  width: 80px;
  margin-right: 0;
  background-size: cover;
  background-position-x: center;
  background-position-y: -18px;
  background-repeat: no-repeat;
  cursor: pointer;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  @media (min-width: 480px) {
    margin-right: 10px;
    height: 100px;
    width: 100px;
    background-position-y: -25px;
  }
  @media (min-width: 1024px) {
    margin-right: 30px;
    margin-bottom: 10px;
    height: 90px;
    width: 80px;
    background-position-y: -10px;
    &:nth-last-child(1) {
      margin-right: 30px;
      margin-bottom: 0;
    }
  }
`;

const SideImage = ({ img }) => {
  return (
    <SideImageContainer
      style={{ backgroundImage: `url(${img})` }}
    ></SideImageContainer>
  );
};

export default SideImage;

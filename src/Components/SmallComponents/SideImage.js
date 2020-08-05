import React from "react";
import styled from "styled-components";

const SideImageContainer = styled.div`
  height: 90px;
  width: 80px;
  margin-right: 30px;
  margin-bottom: 10px;
  background-size: cover;
  background-position-y: -5px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const SideImage = ({ img }) => {
  return (
    <SideImageContainer
      style={{ backgroundImage: `url(${img})` }}
    ></SideImageContainer>
  );
};

export default SideImage;

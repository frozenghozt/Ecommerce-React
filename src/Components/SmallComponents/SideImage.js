import React from "react";
import styled from "styled-components";
import { color } from "../../styled/variables";

const SideImageContainer = styled.div`
  background-color: ${color.mediumgrey};
  height: 90px;
  width: 80px;
  margin-right: 30px;
  margin-bottom: 10px;
  background-image: url("https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-36e9ed9e-d659-4f2d-a4b8-12c214ab433f/calzado-air-max-verona-JF64LJ.jpg");
  background-size: cover;
  background-position-y: -5px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const SideImage = () => {
  return <SideImageContainer></SideImageContainer>;
};

export default SideImage;

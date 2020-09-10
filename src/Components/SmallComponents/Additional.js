import React from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
  padding: 20px 0px 50px 0px;
  width: 70%;
  p {
    color: var(--mediumgrey);
    font-size: 15px;
    line-height: 30px;
    margin: 0;
  }
`;

const Additional = () => {
  return (
    <TextWrapper>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu libero
        leo. Donec ut pulvinar lacus. Vivamus elementum aliquam efficitur. Nunc
        dolor libero, tempus sed tempor eget, volutpat nec dui. Vivamus maximus
        nulla ut mauris bibendum maximus. Donec et porta lorem. Aenean et odio
        eu diam efficitur imperdiet. Sed eleifend magna euismod sapien pretium
        vestibulum.
      </p>
    </TextWrapper>
  );
};

export default Additional;

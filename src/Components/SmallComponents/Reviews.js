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

const Reviews = () => {
  return (
    <TextWrapper>
      <p>
        Maecenas bibendum tellus quis nisl facilisis, ac posuere ipsum
        tincidunt. Sed pellentesque nibh in leo malesuada accumsan. Duis semper,
        risus sed condimentum blandit, risus arcu tempus nunc, non tincidunt
        tortor eros in nisl.
      </p>
    </TextWrapper>
  );
};

export default Reviews;

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

const Description = () => {
  return (
    <TextWrapper>
      <p>
        Midi length dress. Short sleeves with tied cuffs detail. Decorative knot
        fastening. Contrasting ruffle detail at the hem. <br /> Material Cotton
        fabric. Striped print, Rounded neck, Decorative knot. Composition: 80%
        cotton, 20% polyester. <br /> MACHINE WASHING MAX 30°C / 85ºF DO NOT
        BLEACH. <br /> IRONING MAX 110°C / 230ºF <br /> DO NOT DRY CLEAN
      </p>
    </TextWrapper>
  );
};

export default Description;

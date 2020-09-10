import React from "react";
import styled from "styled-components";
import Description from "./Description";
import Additional from "./Additional";
import Reviews from "./Reviews";

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DescriptionText = ({ activetab }) => {
  return (
    <TextContainer>
      {activetab === "Description" && <Description />}
      {activetab === "Additional" && <Additional />}
      {activetab === "Reviews" && <Reviews />}
    </TextContainer>
  );
};

export default DescriptionText;

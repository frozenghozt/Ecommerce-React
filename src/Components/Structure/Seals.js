import React from "react";
import styled from "styled-components";

const SealsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 100px;
  cursor: default;
  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    > span {
      font-family: var(--icons);
      font-size: 34px;
      margin-bottom: 21px;
    }
    > h4 {
      font-size: 18px;
      padding: 0;
      margin: 0;
      margin-bottom: 13px;
    }
    > p {
      color: var(--mediumgrey);
      font-size: 15px;
      margin: 0;
    }
    @media (min-width: 768px) {
      &:hover {
        box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.05);
        border-radius: 7px;
      }
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Seals = () => {
  return (
    <SealsContainer>
      <div>
        <span>&#xe018;</span>
        <h4>BEST DEAL ONLINE</h4>
        <p>Discount off weekly for monthly</p>
      </div>
      <div>
        <span>&#xe106;</span>
        <h4>TOP QUALITY</h4>
        <p>Service quality and customer satisfaction</p>
      </div>
      <div>
        <span>&#x4a;</span>
        <h4>15 DAYS RETURN</h4>
        <p>Cancel and return your within 15 days</p>
      </div>
    </SealsContainer>
  );
};

export default Seals;

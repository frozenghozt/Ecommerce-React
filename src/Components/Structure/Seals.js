import React from "react";
import styled from "styled-components";

const SealsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 100px;
  cursor: default;
  & span {
    font-family: var(--icons);
    font-size: 34px;
    margin-bottom: 21px;
  }
  & h4 {
    font-size: 18px;
    padding: 0;
    margin: 0;
    margin-bottom: 13px;
  }
  & p {
    color: var(--mediumgrey);
    font-size: 15px;
    margin: 0;
  }
`;

const Deal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  padding: 50px;
  &:hover {
    -webkit-box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
  }
`;

const Quality = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 34%;
  padding: 50px;
  &:hover {
    -webkit-box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
  }
`;

const Return = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  padding: 50px;
  &:hover {
    -webkit-box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
  }
`;

const Seals = () => {
  return (
    <SealsContainer>
      <Deal>
        <span>&#xe018;</span>
        <h4>BEST DEAL ONLINE</h4>
        <p>Discount off weekly for monthly</p>
      </Deal>
      <Quality>
        <span>&#xe106;</span>
        <h4>TOP QUALITY</h4>
        <p>Service quality and customer satisfaction</p>
      </Quality>
      <Return>
        <span>&#x4a;</span>
        <h4>15 DAYS RETURN</h4>
        <p>Cancel and return your within 15 days</p>
      </Return>
    </SealsContainer>
  );
};

export default Seals;

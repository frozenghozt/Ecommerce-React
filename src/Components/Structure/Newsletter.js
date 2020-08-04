import React from "react";
import styled from "styled-components";
import { color, font } from "../../styled/variables";
import Container from "@material-ui/core/Container";

const NewsletterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${color.lightgrey};
  padding: 50px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  span {
    font-family: ${font.rubikm};
    font-size: 24px;
  }
  p {
    font-family: $rubikr;
    font-size: 14px;
    color: ${color.mediumgrey};
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  form {
    display: flex;
    width: 100%;
    input {
      padding: 3px 20px;
      border: none;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 13px 26px 12px 26px;
      font-family: ${font.rubikm};
      font-size: 14px;
      background-color: ${color.btnpink};
      color: ${color.white};
      outline: none;
      cursor: pointer;
      border-style: none;
    }
  }
`;

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <Container fluid maxWidth="lg">
        <Wrapper>
          <LeftContainer>
            <span>Newsletter</span>
            <p>
              Subscribe to our newsletter and get 10% off your first purchase
            </p>
          </LeftContainer>
          <RightContainer>
            <form>
              <input type="text" placeholder="Enter your email" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </RightContainer>
        </Wrapper>
      </Container>
    </NewsletterContainer>
  );
};

export default Newsletter;

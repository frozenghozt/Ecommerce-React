import React from "react";
import styled from "styled-components";
import { color, font } from "../../styled/variables";
import Container from "@material-ui/core/Container";

const FooterContainer = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 70px 0px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 25%;
`;

const Title = styled.span`
  color: ${color.black};
  font-family: ${font.rubikm};
  margin-bottom: 30px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: 24px;
    font-size: 14px;
    color: ${color.mediumgrey};
    &:nth-last-child(1) {
      margin: 0px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Wrapper>
          <Column>
            <Title>QUESTIONS</Title>
            <Links>
              <span>How to Buy</span>
              <span>Payment</span>
              <span>Shipping</span>
              <span>Track Order</span>
              <span>Returns</span>
            </Links>
          </Column>
          <Column>
            <Title>CATEGORIES</Title>
            <Links>
              <span>Women</span>
              <span>Men</span>
              <span>Kid</span>
              <span>New trend</span>
              <span>Sales</span>
            </Links>
          </Column>
          <Column>
            <Title>FOLLOW US</Title>
            <Links>
              <span>Facebook</span>
              <span>Twitter</span>
              <span>YouTube</span>
              <span>Instagram</span>
              <span>Pinterest</span>
            </Links>
          </Column>
          <Column>
            <Title>CONTACT US</Title>
            <Links>
              <span>Monday - Sunday 09:00 - 22:00</span>
              <span>1123 7th Str. Ottawa. CA 96312</span>
              <span>+84 0248 3579</span>
              <span>info@gmail.com</span>
            </Links>
          </Column>
        </Wrapper>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

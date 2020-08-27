import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: none;
  flex-direction: column;
  width: 200px;

  margin-top: 40px;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Filter = styled.div`
  width: 100%;
`;

const Title = styled.div`
  cursor: pointer;
  color: var(--black);
  margin-bottom: 20px;
`;

const Sort = styled.div`
  display: flex;
  flex-direction: column;
  button {
    border: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0);
    outline: none;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 13px;
    span {
      font-size: 15px;
      cursor: pointer;
      color: var(--black);
    }
  }
  margin-bottom: 20px;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  button {
    border: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0);
    outline: none;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 13px;
  }
  span {
    font-size: 15px;
    cursor: pointer;
    color: var(--black);
  }
  margin-bottom: 20px;
`;

const Color = styled.div`
  display: flex;
  flex-direction: column;
  button {
    border: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0);
    outline: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 13px;
    span {
      font-size: 15px;
      cursor: pointer;
    }
  }
  margin-bottom: 20px;
`;

const YellowBullet = styled.span`
  height: 10px;
  width: 10px;
  background-color: #faed34;
  border-radius: 50%;
  margin-right: 15px;
  margin-bottom: 2px;
`;

const GrayBullet = styled.span`
  height: 10px;
  width: 10px;
  background-color: #858585;
  border-radius: 50%;
  margin-right: 15px;
  margin-bottom: 2px;
`;

const RedBullet = styled.span`
  height: 10px;
  width: 10px;
  background-color: #ee1313;
  border-radius: 50%;
  margin-right: 15px;
  margin-bottom: 2px;
`;

const BlackBullet = styled.span`
  height: 10px;
  width: 10px;
  background-color: #252525;
  border-radius: 50%;
  margin-right: 15px;
  margin-bottom: 2px;
`;

const BlueBullet = styled.span`
  height: 10px;
  width: 10px;
  background-color: #6b95d9;
  border-radius: 50%;
  margin-right: 15px;
  margin-bottom: 2px;
`;

const GreenBullet = styled.span`
  height: 10px;
  width: 10px;
  background-color: #78cc41;
  border-radius: 50%;
  margin-right: 15px;
  margin-bottom: 2px;
`;

const Size = styled.div`
  display: flex;
  flex-direction: column;
  button {
    border: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0);
    outline: none;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 13px;
  }
  span {
    font-size: 15px;
    cursor: pointer;
    color: var(--black);
  }
  margin-bottom: 20px;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  button {
    border: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0);
    outline: none;
  }
  margin-bottom: 20px;
`;

const VerticalFilter = () => {
  return (
    <motion.div animate={{ x: 0 }} initial={{ x: -200 }}>
      <Container>
        <Filter>
          <Title>
            <span>Sort By</span>
          </Title>
          <Sort>
            <button>
              <span>Best seller</span>
            </button>
            <button>
              <span>Popularity</span>
            </button>
            <button>
              <span>Average rating</span>
            </button>
            <button>
              <span>New arrival</span>
            </button>
            <button>
              <span>Price: low to high</span>
            </button>
            <button>
              <span>Price: high to low</span>
            </button>
          </Sort>
        </Filter>
        <Filter>
          <Title>
            <span>Price</span>
          </Title>
          <Price>
            <button>
              <span>$0.00 - $50.00</span>
            </button>
            <button>
              <span>$50.00 - $100.00</span>
            </button>
            <button>
              <span>$100.00 - $150.00</span>
            </button>
            <button>
              <span>$150.00 - $200.00</span>
            </button>
            <button>
              <span>$200.00 - $250.00</span>
            </button>
            <button>
              <span>$250.00+</span>
            </button>
          </Price>
        </Filter>
        <Filter>
          <Title>
            <span>Color</span>
          </Title>
          <Color>
            <button>
              <YellowBullet></YellowBullet>
              <span>Yellow</span>
            </button>
            <button>
              <GrayBullet></GrayBullet>
              <span>Gray</span>
            </button>
            <button>
              <RedBullet></RedBullet>
              <span>Red</span>
            </button>
            <button>
              <BlackBullet></BlackBullet>
              <span>Black</span>
            </button>
            <button>
              <BlueBullet></BlueBullet>
              <span>Blue</span>
            </button>
            <button>
              <GreenBullet></GreenBullet>
              <span>Green</span>
            </button>
          </Color>
        </Filter>
        <Filter>
          <Title>
            <span>Size</span>
          </Title>
          <Size>
            <button>
              <span>L</span>
            </button>
            <button>
              <span>M</span>
            </button>
            <button>
              <span>S</span>
            </button>
            <button>
              <span>XL</span>
            </button>
            <button>
              <span>XXL</span>
            </button>
            <button>
              <span>Over Size</span>
            </button>
          </Size>
        </Filter>
        <Filter>
          <Title>
            <span>Tags</span>
          </Title>
          <Tags>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Tags>
        </Filter>
      </Container>
    </motion.div>
  );
};

export default VerticalFilter;

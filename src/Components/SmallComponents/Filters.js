import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const FiltersContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 0px 0px 0px;
  font-size: 14px;
`;

const Filter = styled.div`
  width: 20%;
  height: 300px;
  margin: 1px;
`;

const Title = styled.div`
  cursor: pointer;
  font-weight: var(--rubikm);
  color: $black;
  margin-bottom: 40px;
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
      font-size: 14px;
      cursor: pointer;
      color: var(--filtergrey);
    }
  }
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
    font-size: 14px;
    cursor: pointer;
    color: var(--filtergrey);
  }
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
      font-size: 14px;
      cursor: pointer;
      color: var(--filtergrey);
    }
  }
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
    font-size: 14px;
    cursor: pointer;
    color: var(--filtergrey);
  }
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
`;

const Filters = ({ open }) => {
  return (
    <CSSTransition in={open} timeout={300} classNames="anime" unmountOnExit>
      <FiltersContainer>
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
      </FiltersContainer>
    </CSSTransition>
  );
};

export default Filters;

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  addPrice,
  removePrice,
  addColor,
  removeColor,
  addSize,
  removeSize,
  clear,
} from "../../redux/actions/filterAct";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 13px;
  }
  input {
    margin-right: 5px;
    margin-top: 4px;
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
    align-items: center;
    margin-bottom: 13px;
  }
  span {
    font-size: 15px;
    cursor: pointer;
    color: var(--black);
  }
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
`;

const VerticalFilter = ({ isOpen }) => {
  const [hidePriceOne, sethidePriceOne] = useState(false);
  const [hidePriceTwo, sethidePriceTwo] = useState(false);
  const [hidePriceThree, sethidePriceThree] = useState(false);
  const [hidePriceFour, sethidePriceFour] = useState(false);
  const [hidePriceFive, sethidePriceFive] = useState(false);
  const [hidePriceSix, sethidePriceSix] = useState(false);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="VertFilter"
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          exit={{ x: -200 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <Container>
            <Filter>
              <Title>
                <span>Sort By</span>
              </Title>
              <Sort>
                <button>
                  <StyledLink to="/shop?sort=best">
                    <span>Best seller</span>
                  </StyledLink>
                </button>
                <button>
                  <StyledLink to="/shop?sort=popular">
                    <span>Popularity</span>
                  </StyledLink>
                </button>
                <button>
                  <StyledLink to="/shop?sort=rating">
                    <span>Average rating</span>
                  </StyledLink>
                </button>
                <button>
                  <StyledLink to="/shop?sort=new">
                    <span>New arrival</span>
                  </StyledLink>
                </button>
                <button>
                  <StyledLink to="/shop?sort=priceAsc">
                    <span>Price: low to high</span>
                  </StyledLink>
                </button>
                <button>
                  <StyledLink to="/shop?sort=priceDesc">
                    <span>Price: high to low</span>
                  </StyledLink>
                </button>
              </Sort>
            </Filter>
            <Filter>
              <Title>
                <span>Price</span>
              </Title>
              <Price>
                {/* Price Range Button 0 - 49.99 */}
                {hidePriceOne ? (
                  <button
                    onClick={() => {
                      dispatch(removePrice([0, 49.99]));
                      sethidePriceOne(false);
                    }}
                  >
                    <span style={{ fontWeight: "bolder" }}>$0.00 - $50.00</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch(addPrice([0, 49.99]));
                      sethidePriceOne(true);
                    }}
                  >
                    <span>$0.00 - $50.00</span>
                  </button>
                )}
                {/* Price Range Button 50 - 99.99 */}
                {hidePriceTwo ? (
                  <button
                    onClick={() => {
                      dispatch(removePrice([50, 99.99]));
                      sethidePriceTwo(false);
                    }}
                  >
                    <span style={{ fontWeight: "bolder" }}>
                      $50.00 - $100.00
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch(addPrice([50, 99.99]));
                      sethidePriceTwo(true);
                    }}
                  >
                    <span>$50.00 - $100.00</span>
                  </button>
                )}
                {/* Price Range Button 100 - 149.99 */}
                {hidePriceThree ? (
                  <button
                    onClick={() => {
                      dispatch(removePrice([100, 149.99]));
                      sethidePriceThree(false);
                    }}
                  >
                    <span style={{ fontWeight: "bolder" }}>
                      $100.00 - $150.00
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch(addPrice([100, 149.99]));
                      sethidePriceThree(true);
                    }}
                  >
                    <span>$100.00 - $150.00</span>
                  </button>
                )}
                {/* Price Range Button 150 - 199.99 */}
                {hidePriceFour ? (
                  <button
                    onClick={() => {
                      dispatch(removePrice([150, 199.99]));
                      sethidePriceFour(false);
                    }}
                  >
                    <span style={{ fontWeight: "bolder" }}>
                      $150.00 - $200.00
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch(addPrice([150, 199.99]));
                      sethidePriceFour(true);
                    }}
                  >
                    <span>$150.00 - $200.00</span>
                  </button>
                )}
                {/* Price Range Button 200 - 249.99 */}
                {hidePriceFive ? (
                  <button
                    onClick={() => {
                      dispatch(removePrice([200, 249.99]));
                      sethidePriceFive(false);
                    }}
                  >
                    <span style={{ fontWeight: "bolder" }}>
                      $200.00 - $250.00
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch(addPrice([200, 249.99]));
                      sethidePriceFive(true);
                    }}
                  >
                    <span>$200.00 - $250.00</span>
                  </button>
                )}
                {/* Price Range Button 250 - 9999 */}
                {hidePriceSix ? (
                  <button
                    onClick={() => {
                      dispatch(removePrice([250, 9999]));
                      sethidePriceSix(false);
                    }}
                  >
                    <span style={{ fontWeight: "bolder" }}>$250.00 +</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch(addPrice([250, 9999]));
                      sethidePriceSix(true);
                    }}
                  >
                    <span>$250.00 +</span>
                  </button>
                )}
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
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VerticalFilter;

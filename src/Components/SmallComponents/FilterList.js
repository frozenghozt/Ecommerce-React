import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100%;
  overflow: scroll;
  z-index: var(--veryveryhigh);
  @media (min-width: 1024px) {
    display: none;
  }
`;

const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100%;
  width: 100%;
  background-color: var(--white);
  overflow-y: scroll;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: var(--black);
  align-items: center;
  padding: 20px 0 20px;
  > h3 {
    font-size: 24px;
    font-weight: 400;
  }
  > span {
    cursor: pointer;
  }
`;

const Filter = styled.div`
  width: 100%;
`;

const Title = styled.div`
  cursor: pointer;
  color: var(--black);
  padding: 10px 0 20px;
  font-size: 16px;
  font-weight: 400;
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
    align-items: center;
    margin-bottom: 13px;
    span {
      font-size: 16px;
      margin-top: 3px;
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
      font-size: 16px;
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
    font-size: 16px;
    cursor: pointer;
    color: var(--black);
  }
  margin-bottom: 20px;
`;

const FilterLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e5e5e5;
  margin-bottom: 15px;
`;

const PseudoRadio = styled.div`
  height: 16px;
  width: 16px;
  vertical-align: top;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 100%;
  margin-right: 6px;
  display: inline-block;
  position: relative;
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: rgb(17, 17, 17);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 100ms ease 0s;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
`;

const FilterList = ({ opener, isOpen }) => {
  const ModalRoot = document.getElementById("MobileFilter");
  // const [active, setActive] = useState("");

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <Container>
          <motion.div
            key="modal"
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            exit={{ y: "100%" }}
            transition={{ ease: "easeOut", duration: 0.4 }}
          >
            <GlobalWrapper>
              <TitleWrapper>
                <h3>Filter</h3>
                <span onClick={opener}>X</span>
              </TitleWrapper>
              <Filter>
                <Title>
                  <span>Sort By</span>
                </Title>
                <Sort>
                  <button>
                    <StyledLink to="/shop?sort=best" onClick={opener}>
                      <PseudoRadio />
                      <span>Best seller</span>
                    </StyledLink>
                  </button>
                  <button>
                    <StyledLink to="/shop?sort=popular" onClick={opener}>
                      <PseudoRadio />
                      <span>Popularity</span>
                    </StyledLink>
                  </button>
                  <button>
                    <StyledLink to="/shop?sort=rating" onClick={opener}>
                      <PseudoRadio />
                      <span>Average rating</span>
                    </StyledLink>
                  </button>
                  <button>
                    <StyledLink to="/shop?sort=new" onClick={opener}>
                      <PseudoRadio />
                      <span>New arrival</span>
                    </StyledLink>
                  </button>
                  <button>
                    <StyledLink to="/shop?sort=priceAsc" onClick={opener}>
                      <PseudoRadio />
                      <span>Price: low to high</span>
                    </StyledLink>
                  </button>
                  <button>
                    <StyledLink to="/shop?sort=priceDesc" onClick={opener}>
                      <PseudoRadio />
                      <span>Price: high to low</span>
                    </StyledLink>
                  </button>
                </Sort>
              </Filter>
              <FilterLine />
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
              <FilterLine />
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
              <FilterLine />
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
            </GlobalWrapper>
          </motion.div>
        </Container>
      )}
    </AnimatePresence>,
    ModalRoot
  );
};

export default FilterList;

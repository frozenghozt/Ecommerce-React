import React, { useState } from "react";
import styled from "styled-components";
import SaleRect from "./SaleRect";
import HotRect from "./HotRect";
import ProductHover from "./ProductHover";

const ProductContainer = styled.div`
  width: calc(100% / 2);
  @media (min-width: 768px) {
    width: calc(100% / 3);
  }
  @media (min-width: 1366px) {
    width: calc(100% / 4);
  }
`;

const Wrapper = styled.div`
  padding: 0px 7px;
  @media (min-width: 1024px) {
    padding: 0px 10px;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-bottom: 110%;
  height: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Info = styled.div`
  display: flex;
  font-size: 15px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - 350px);
  width: 100%;
  @media (min-width: 480px) {
    margin-bottom: 30px;
  }
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 50px;
  }
`;

const NameColor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
  > span {
    margin-bottom: 6px;
    @media (min-width: 480px) {
      margin-bottom: 0px;
    }
  }
  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

const Colors = styled.div`
  display: flex;
  align-items: center;
  & span {
    height: 11px;
    width: 11px;
    margin-left: 3px;
    border-radius: 50%;
    &:nth-child(1) {
      margin-left: 0;
    }
  }
`;

const Price = styled.div`
  font-weight: var(--rubikm);
  width: 100%;
  span {
    color: var(--btnpink);
    &:nth-child(2) {
      color: rgb(210, 210, 210);
      margin-left: 13px;
      text-decoration: line-through;
    }
  }
`;

const Product = ({
  uid,
  name,
  sku,
  routeUrl,
  price,
  prevprice,
  img,
  hot,
  colors,
}) => {
  const [ishover, setishover] = useState(false);

  const hoverHandler = () => {
    setishover(!ishover);
  };

  return (
    <ProductContainer>
      <Wrapper>
        <Image
          style={{ backgroundImage: `url(${img})` }}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          {hot ? <HotRect /> : null}
          {prevprice > price ? <SaleRect /> : null}
          <ProductHover
            ishover={ishover}
            uid={uid}
            name={name}
            sku={sku}
            routeUrl={routeUrl}
            img={img}
            price={price}
          />
        </Image>
        <Info>
          <NameColor>
            <span>{name}</span>
            <Colors>
              {colors.map((color, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: `${color}`,
                    border:
                      color === "white"
                        ? "1px solid gray"
                        : `1px solid ${color}`,
                  }}
                ></span>
              ))}
            </Colors>
          </NameColor>
          <Price>
            <span>$ {price}</span>
            {prevprice > 0 ? <span>{prevprice}</span> : null}
          </Price>
        </Info>
      </Wrapper>
    </ProductContainer>
  );
};

export default Product;

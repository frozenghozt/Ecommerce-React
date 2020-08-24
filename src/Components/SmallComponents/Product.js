import React, { useState } from "react";
import styled from "styled-components";
import SaleRect from "./SaleRect";
import HotRect from "./HotRect";
import ProductHover from "./ProductHover";

const ProductContainer = styled.div`
  width: 25%;
  min-width: 300px;
`;

const Wrapper = styled.div`
  padding: 0px 15px;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 30px;
`;

const Info = styled.div`
  display: flex;
  font-size: 14px;
  margin-bottom: 50px;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - 350px);
  width: 100%;
`;

const NameColor = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;

const Colors = styled.div`
  display: flex;
  align-items: center;
  & span {
    height: 11px;
    width: 11px;
    margin-left: 3px;
    border-radius: 50%;
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

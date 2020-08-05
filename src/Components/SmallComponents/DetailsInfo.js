import React from "react";
import styled from "styled-components";
import { color, font } from "../../styled/variables";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  addCart,
  removeCart,
} from "../../redux/actions/productAct";

const DetailsInfoContainer = styled.div`
  width: 50%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 90px;
  height: 100%;
`;

const NamePrice = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Price = styled.span`
  font-size: 22px;
  color: ${color.btnpink};
`;

const ReviewRating = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const Title = styled.span`
  color: ${color.black};
  font-size: 18px;
  margin-bottom: 20px;
`;

const Starwrap = styled.div`
  display: flex;
  span {
    font-family: ${font.icons};
    font-size: 17px;
    color: #f5c136;
    margin-right: 1px;
  }
`;

const Availability = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const Subtext = styled.span`
  font-size: 14px;
  color: ${color.mediumgrey};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    font-family: ${font.rubikm};
    font-size: 14px;
    border: 1px solid ${color.black};
    padding: 9px 25px 9px 25px;
    margin-right: 10px;
  }
  margin-bottom: 50px;
`;

const AddCart = styled.button`
  font-family: ${font.rubikm};
  font-size: 14px;
  background-color: ${color.black};
  color: ${color.white};
  padding: 10px 25px 8px 25px;
  border: 1px solid ${color.black};
  margin-right: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Favorite = styled.button`
  font-family: ${font.icons};
  font-size: 14px;
  background-color: ${color.white};
  color: ${color.black};
  padding: 9px 9px 9px 9px;
  border: 1px solid ${color.black};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const SkuCat = styled.div`
  color: ${color.black};
  font-size: 16px;
  margin-bottom: 10px;
  span {
    margin-right: 15px;
  }
`;

const Tags = styled.div`
  color: ${color.black};
  font-size: 16px;
  span {
    margin-right: 15px;
  }
`;

const DetailsInfo = ({ uid, name, sku, price, img }) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite);
  const cart = useSelector((state) => state.cart);
  return (
    <DetailsInfoContainer>
      <InfoWrapper>
        <NamePrice>
          <Name>{name}</Name>
          <Price>$ {price}</Price>
        </NamePrice>
        <ReviewRating>
          <Title>Review</Title>
          <Starwrap>
            <span>&#xe033;</span>
            <span>&#xe033;</span>
            <span>&#xe033;</span>
            <span>&#xe031;</span>
            <span>&#xe031;</span>
          </Starwrap>
        </ReviewRating>
        <Availability>
          <Title>Availability</Title>
          <Subtext>In Stock</Subtext>
        </Availability>
        <ButtonWrapper>
          <span>1</span>
          {cart.some((each) => each.uid === uid) ? (
            <AddCart
              onClick={() => {
                dispatch(removeCart({ uid, name, img, price }));
              }}
              style={{
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(65, 191, 92)",
                border: "1px solid rgb(65, 191, 92)",
              }}
            >
              ADD TO CARD
            </AddCart>
          ) : (
            <AddCart
              onClick={() => {
                dispatch(addCart({ uid, name, img, price }));
              }}
            >
              ADD TO CARD
            </AddCart>
          )}
          {favorite.some((each) => each.uid === uid) ? (
            <Favorite
              onClick={() => {
                dispatch(removeFavorite({ uid, name, img, price }));
              }}
              style={{
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(226, 74, 73)",
                border: "1px solid rgb(226, 74, 73)",
              }}
            >
              &#xe089;
            </Favorite>
          ) : (
            <Favorite
              onClick={() => {
                dispatch(addFavorite({ uid, name, img, price }));
              }}
            >
              &#xe089;
            </Favorite>
          )}
        </ButtonWrapper>
        <SkuCat>
          <span>SKU: {sku}</span>
          <span>Categories: Dress</span>
        </SkuCat>
        <Tags>
          <span>Tags: Women, Dress, Fashion</span>
        </Tags>
      </InfoWrapper>
    </DetailsInfoContainer>
  );
};

export default DetailsInfo;

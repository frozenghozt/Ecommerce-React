import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  addCart,
  removeCart,
} from "../../redux/actions/productAct";

const DetailsInfoContainer = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  height: 100%;
  @media (min-width: 1024px) {
    padding-left: 15%;
  }
`;

const NamePrice = styled.div`
  display: none;
  margin-bottom: 45px;
  flex-direction: column;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Name = styled.span`
  font-size: 28px;
  margin-bottom: 15px;
`;

const PricePrevPrive = styled.div`
  display: flex;
`;

const Price = styled.span`
  font-size: 22px;
  color: var(--btnpink);
`;

const PrevPrice = styled.div`
  font-size: 22px;
  color: rgb(210, 210, 210);
  margin-left: 13px;
  text-decoration: line-through;
`;

const ReviewRating = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    margin-bottom: 45px;
  }
`;

const Title = styled.span`
  color: var(--black);
  font-size: 18px;
  margin-bottom: 8px;
  @media (min-width: 1024px) {
    margin-bottom: 15px;
  }
`;

const Starwrap = styled.div`
  display: flex;
  span {
    font-family: var(--icons);
    font-size: 17px;
    color: #f5c136;
    margin-right: 1px;
  }
`;

const Availability = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    margin-bottom: 45px;
  }
`;

const Subtext = styled.span`
  font-size: 15px;
  color: var(--mediumgrey);
`;

const MobileInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  @media (min-width: 1024px) {
    flex-direction: column;
    margin-top: 0;
    align-items: flex-start;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: var(--rubikm);
    font-size: 15px;
    border: 1px solid var(--black);
    padding: 0 25px;
    height: 40px;
    margin-right: 10px;
    @media (min-width: 1024px) {
      max-height: 35px;
    }
  }
  margin-top: 40px;
  @media (min-width: 1024px) {
    margin: 0 0 45px;
    padding: 0;
  }
`;

const AddCart = styled.button`
  flex: 1;
  font-weight: var(--rubikm);
  font-size: 15px;
  background-color: var(--black);
  color: var(--white);
  height: 40px;
  border: 1px solid var(--black);
  margin-right: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media (min-width: 1024px) {
    flex: none;
    padding: 10px 25px 8px 25px;
    max-height: 35px;
  }
`;

const Favorite = styled.button`
  font-family: var(--icons);
  font-size: 15px;
  background-color: var(--white);
  color: var(--black);
  height: 40px;
  width: 40px;
  padding: 9px 9px 9px 9px;
  border: 1px solid var(--black);
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media (min-width: 1024px) {
    max-height: 35px;
  }
`;

const SkuTagsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

const SkuCat = styled.div`
  color: var(--black);
  font-size: 16px;
  margin-bottom: 15px;
  span {
    margin-right: 15px;
  }
`;

const Tags = styled.div`
  color: var(--black);
  font-size: 16px;
  span {
    margin-right: 15px;
  }
`;

const DetailsInfo = ({ uid, name, sku, price, prevprice, img }) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite);
  const cart = useSelector((state) => state.cart);

  return (
    <DetailsInfoContainer>
      <InfoWrapper>
        <NamePrice>
          <Name>{name}</Name>
          <PricePrevPrive>
            <Price>$ {price}</Price>
            {prevprice > 0 ? <PrevPrice>{prevprice}</PrevPrice> : null}
          </PricePrevPrive>
        </NamePrice>
        <MobileInfoWrap>
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
        </MobileInfoWrap>
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
        <SkuTagsWrap>
          <SkuCat>
            <span>SKU: {sku}</span>
            <span>Categories: Dress</span>
          </SkuCat>
          <Tags>
            <span>Tags: Women, Dress, Fashion</span>
          </Tags>
        </SkuTagsWrap>
      </InfoWrapper>
    </DetailsInfoContainer>
  );
};

export default DetailsInfo;

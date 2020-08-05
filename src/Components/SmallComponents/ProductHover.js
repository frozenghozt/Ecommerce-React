import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, font } from "../../styled/variables";
import {
  addFavorite,
  removeFavorite,
  addCart,
  removeCart,
} from "../../redux/actions/productAct";

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 83%;
  width: 88%;
  height: 30px;
  padding: 5px 0px;
  background: ${color.white};
  cursor: pointer;
`;

const AddCart = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-family: ${font.icons};
  font-size: 15px;
  padding: 0px 14px;
  color: ${color.mediumgrey};
  border-right: 2px solid ${color.lightgrey};
`;

const ViewProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  font-family: ${font.rubikm};
  font-size: 13px;
  width: 100%;
`;

const Favorite = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-family: ${font.icons};
  font-size: 15px;
  padding: 0px 14px;
  color: ${color.mediumgrey};
  border-left: 1px solid ${color.lightgrey};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${color.black};
`;

const ProductHover = ({ ishover, uid, name, sku, routeUrl, img, price }) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite);
  const cart = useSelector((state) => state.cart);

  if (ishover === false) {
    return null;
  }

  return (
    <ProductContainer>
      {cart.some((each) => each.uid === uid) ? (
        <AddCart
          onClick={() => dispatch(removeCart({ uid, name, img, price }))}
        >
          <span style={{ color: "rgb(226, 74, 73)" }}>&#xe07a;</span>
        </AddCart>
      ) : (
        <AddCart onClick={() => dispatch(addCart({ uid, name, img, price }))}>
          <span>&#xe07a;</span>
        </AddCart>
      )}
      <ViewProduct>
        <StyledLink to={`/${routeUrl}`}>
          <span>VIEW PRODUCT</span>
        </StyledLink>
      </ViewProduct>
      {favorite.some((each) => each.uid === uid) ? (
        <Favorite
          onClick={() => {
            dispatch(removeFavorite({ uid, name, img, price }));
          }}
        >
          <span style={{ color: "rgb(226, 74, 73)" }}>&#xe089;</span>
        </Favorite>
      ) : (
        <Favorite
          onClick={() => {
            dispatch(addFavorite({ uid, name, img, price }));
          }}
        >
          <span>&#xe089;</span>
        </Favorite>
      )}
    </ProductContainer>
  );
};

export default ProductHover;

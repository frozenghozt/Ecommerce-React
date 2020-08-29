import React from "react";
import styled from "styled-components";
import FavoriteItem from "./FavoriteItem";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

const FavListContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: var(--white);
  height: calc(100% - 50px);
  z-index: 200;
  @media (min-width: 768px) {
    height: calc(100% - 70px);
    width: 350px;
  }
  @media (min-width: 1024px) {
    height: calc(100% - 100px);
    width: 350px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px 10%;
  & > span {
    font-weight: var(--rubikm);
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const FavoriteList = ({ open }) => {
  const favorite = useSelector((state) => state.favorite);

  return (
    <CSSTransition
      in={open}
      timeout={300}
      classNames="headermenu"
      unmountOnExit
    >
      <FavListContainer>
        <Wrapper>
          <span>Your Favorite</span>
          {favorite.map(({ uid, name, img, price, routeUrl }, i) => (
            <FavoriteItem
              key={i}
              uid={uid}
              name={name}
              img={img}
              price={price}
              routeUrl={routeUrl}
            />
          ))}
        </Wrapper>
      </FavListContainer>
    </CSSTransition>
  );
};

export default FavoriteList;

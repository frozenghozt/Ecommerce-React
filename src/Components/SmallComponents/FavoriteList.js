import React from "react";
import styled from "styled-components";
import { color, font } from "../../styled/variables";
import "./FavCartAnime.css";
import FavoriteItem from "./FavoriteItem";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

const FavListContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 350px;
  background-color: ${color.white};
  height: calc(100% - 100px);
  z-index: 200;
`;

const Wrapper = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  padding: 25px 50px;
  & > span {
    font-family: ${font.rubikm};
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const FavoriteList = ({ open }) => {
  const favorite = useSelector((state) => state.favorite);

  return (
    <CSSTransition in={open} timeout={300} classNames="anime" unmountOnExit>
      <FavListContainer>
        <Wrapper>
          <span>Your Favorite</span>
          {favorite.map(({ uid, name, img, price }, i) => (
            <FavoriteItem
              key={i}
              uid={uid}
              name={name}
              img={img}
              price={price}
            />
          ))}
        </Wrapper>
      </FavListContainer>
    </CSSTransition>
  );
};

export default FavoriteList;

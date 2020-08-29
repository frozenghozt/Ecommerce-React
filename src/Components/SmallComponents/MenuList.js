import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const MenuListContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100vw;
  background-color: var(--white);
  height: calc(100% - 50px);
  z-index: 200;
  @media (min-width: 768px) {
    height: calc(100% - 70px);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  & > span {
    font-weight: var(--rubikm);
    font-size: 15px;
    margin-bottom: 20px;
  }
  > div {
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    @media (min-width: 768px) {
      margin-bottom: 70px;
    }
    > ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      > li {
        font-size: 20px;
        margin-bottom: 30px;
        &:nth-last-child(1) {
          margin-bottom: 0;
          color: red;
        }
      }
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
`;

const MenuList = ({ open, close }) => {
  return (
    <CSSTransition
      in={open}
      timeout={300}
      classNames="headermenu"
      unmountOnExit
    >
      <MenuListContainer>
        <Wrapper>
          <div>
            <ul>
              <li>
                <StyledLink to="/" onClick={close}>
                  Home
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/shop" onClick={close}>
                  Shop
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/features" onClick={close}>
                  Features
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/page" onClick={close}>
                  Page
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/blog" onClick={close}>
                  Blog
                </StyledLink>
              </li>
            </ul>
          </div>
        </Wrapper>
      </MenuListContainer>
    </CSSTransition>
  );
};

export default MenuList;

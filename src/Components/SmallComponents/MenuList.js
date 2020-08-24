import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const MenuListContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100vw;
  background-color: var(--white);
  height: calc(100% - 70px);
  z-index: 200;
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
  > div {
    width: 100%;
    height: 100%;
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

const MenuList = ({ open }) => {
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
              <li>Home</li>
              <li>Shop</li>
              <li>Features</li>
              <li>Page</li>
              <li>Blog</li>
              <li>Login</li>
            </ul>
          </div>
        </Wrapper>
      </MenuListContainer>
    </CSSTransition>
  );
};

export default MenuList;

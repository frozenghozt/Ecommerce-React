import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--white);
  z-index: var(--veryveryhigh);
  @media (min-width: 1024px) {
    display: none;
  }
`;

const ModalStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  color: rgb(177, 186, 211);
  background-color: #1a2c38;
  height: 300px;
  border-radius: 7px;
  width: 600px;
  z-index: 101;
  overflow-y: auto;
  padding: 9px;
`;

const ContentDivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Modal = (props) => {
  const ModalRoot = document.getElementById("MobileFilter");

  return ReactDOM.createPortal(
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: "100vh" }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <Container>
        <ModalStyle>
          <ContentDivStyle>{props.children}</ContentDivStyle>
        </ModalStyle>
      </Container>
    </motion.div>,
    ModalRoot
  );
};

export default Modal;

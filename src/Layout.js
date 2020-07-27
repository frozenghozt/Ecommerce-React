import React from "react";
import Header from "./Components/Structure/Header";
import Banner from "./Components/Structure/Banner";
import HpFilter from "./Components/Structure/HpFilter";
import Container from "@material-ui/core/Container";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Banner />
      <Container fixed>
        <HpFilter />
      </Container>
    </div>
  );
};

export default Layout;

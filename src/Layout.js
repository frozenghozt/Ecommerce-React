import React from "react";
import Header from "./Components/Structure/Header";
import Banner from "./Components/Structure/Banner";
import HpFilter from "./Components/Structure/HpFilter";
import Products from "./Components/Structure/Products";
import Seals from "./Components/Structure/Seals";
import Newsletter from "./Components/Structure/Newsletter";
import styles from "./Layout.module.scss";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Banner />
      <Container fluid maxWidth="lg">
        <Hidden mdDown>
          <HpFilter />
        </Hidden>
        <Products />
        <Seals />
      </Container>
      <Newsletter />
    </div>
  );
};

export default Layout;

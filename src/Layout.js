import React from "react";
import Header from "./Components/Structure/Header";
import Banner from "./Components/Structure/Banner";
import HpFilter from "./Components/Structure/HpFilter";
import Products from "./Components/Structure/Products";
import Seals from "./Components/Structure/Seals";
import Newsletter from "./Components/Structure/Newsletter";
import Search from "./Components/Structure/Search";
import styles from "./Layout.module.scss";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import { Switch, Route } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Switch>
        <>
          <Header />
          <Route exact path="/">
            <Banner />
            <Container fluid maxWidth="lg">
              <Hidden mdDown>
                <HpFilter />
              </Hidden>
              <Products />
              <Seals />
            </Container>
            <Newsletter />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </>
      </Switch>
    </div>
  );
};

export default Layout;

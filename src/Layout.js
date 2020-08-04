import React from "react";
import Header from "./Components/Structure/Header";
import Banner from "./Components/Structure/Banner";
import Filter from "./Components/Structure/Filter";
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
      <Header />
      <Switch>
        <Route exact path="/">
          <Banner />
          <Container fluid maxWidth="lg">
            <Hidden mdDown>
              <Filter />
            </Hidden>
            <Products />
            <Seals />
          </Container>
          <Newsletter />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        {/* <Route path="/"></Route> */}
      </Switch>
    </div>
  );
};

export default Layout;

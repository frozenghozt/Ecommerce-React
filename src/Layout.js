import React from "react";
import styled from "styled-components";
import Header from "./Components/Structure/Header";
import Homepage from "./Components/Pages/Homepage";
import Footer from "./Components/Structure/Footer";
import ProductPage from "./Components/Pages/ProductPage";
import ShopPage from "./Components/Pages/ShopPage";
import Search from "./Components/Structure/Search";
import { Switch, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";
// Styles
import GlobalStyles from "./styled/GlobalStyles";
import "./styled/MenuAnime.css";
import "./styled/FiltersAnime.css";

const LayoutStyle = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = () => {
  return (
    <>
      <LayoutStyle>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route path="/s/:routeUrl" component={ProductPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
        <Footer />
        <GlobalStyles />
      </LayoutStyle>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default Layout;

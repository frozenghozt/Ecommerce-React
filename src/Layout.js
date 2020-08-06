import React from "react";
import styled from "styled-components";
import Header from "./Components/Structure/Header";
import Homepage from "./Components/Pages/Homepage";
import ProductPage from "./Components/Pages/ProductPage";
import Search from "./Components/Structure/Search";
import { Switch, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";

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
          <Route path="/:routeUrl" component={ProductPage} />
        </Switch>
      </LayoutStyle>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default Layout;

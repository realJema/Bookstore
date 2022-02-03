 
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import "assets/css/styles.css";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "assets/css/slider-animations.css";
import "assets/css/slider-styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Index from "views/Index.js";
// import Page from "views/Page.js";
import Shop from "views/Shop";
import SingleProduct from "views/SingleProduct";
import AuthorsList from "views/AuthorsList";
import SingleAuthor from "views/SingleAuthor";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Index {...props} />} />
      {/* <Route
        path="/:page"
        exact
        render={(props) => <Page {...props} />}
      /> */}
      <Route
        path="/shop"
        exact
        render={props => <Shop {...props} />}
      />
      <Route path="/product" exact render={props => <SingleProduct {...props} />} />
      <Route
        path="/authors"
        exact
        render={props => <AuthorsList {...props} />}
      />
      <Route
        path="/author"
        exact
        render={props => <SingleAuthor {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

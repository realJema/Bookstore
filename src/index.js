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
import AboutUs from "views/AboutUs";
import ComingSoon from "views/ComingSoon";
import SubmitBook from "views/SubmitBook";
import DashboardReader from "views/DashboardReader";
import DashboardAuthor from "views/DashboardAuthor";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Index {...props} />} />
      <Route path="/about" exact render={(props) => <AboutUs {...props} />} />
      <Route path="/shop" exact render={(props) => <Shop {...props} />} />
      <Route
        path="/product"
        exact
        render={(props) => <SingleProduct {...props} />}
      />
      <Route
        path="/authors"
        exact
        render={(props) => <AuthorsList {...props} />}
      />
      <Route
        path="/author"
        exact
        render={(props) => <SingleAuthor {...props} />}
      />
      <Route
        path="/comingsoon"
        exact
        render={(props) => <ComingSoon {...props} />}
      />
      <Route
        path="/submit"
        exact
        render={(props) => <SubmitBook {...props} />}
      />
      <Route
        path="/dashboard/reader"
        exact
        render={(props) => <DashboardReader {...props} />}
      />
      <Route
        path="/dashboard/author"
        exact
        render={(props) => <DashboardAuthor {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

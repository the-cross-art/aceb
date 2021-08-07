import React from "react";
import { Route, Switch } from "react-router";
import {
  ForgotPassword,
  Home,
  About,
  GmbGeoGrid,
  Login,
  Register,
  RegisterComplete,
  Posting,
  Pricing,
  Department,
  Team,
  Constitution,
  Blogs,
  HyperLoop,
} from "../views";

const CommonRoutes = () => {
  return (
    <Switch>
      <Route exact path="/aceb" component={Home} />
      <Route exact path="/aceb/about" component={About} />
      <Route exact path="/aceb/gmb-geogrid" component={GmbGeoGrid} />
      <Route exact path="/aceb/department" component={Department} />
      <Route exact path="/aceb/team" component={Team} />
      <Route exact path="/aceb/pricing" component={Pricing} />
      <Route exact path="/aceb/blogs" component={Blogs} />
      <Route exact path="/aceb/constitution" component={Constitution} />
      <Route exact path="/aceb/posting" component={Posting} />
      <Route exact path="/aceb/login" component={Login} />
      <Route exact path="/aceb/register" component={Register} />
      <Route
        exact
        path="/aceb/register/complete"
        component={RegisterComplete}
      />
      <Route exact path="/aceb/forgot/password" component={ForgotPassword} />
      <Route exact path="/aceb/blogs/hyperloops" component={HyperLoop} />
    </Switch>
  );
};

export default CommonRoutes;

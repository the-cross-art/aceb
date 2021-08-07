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
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/gmb-geogrid" component={GmbGeoGrid} />
      <Route exact path="/department" component={Department} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/constitution" component={Constitution} />
      <Route exact path="/posting" component={Posting} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/complete" component={RegisterComplete} />
      <Route exact path="/forgot/password" component={ForgotPassword} />
      <Route exact path="/blogs/hyperloops" component={HyperLoop} />
    </Switch>
  );
};

export default CommonRoutes;

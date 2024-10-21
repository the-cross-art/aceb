import React from "react";
import { Route, Switch } from "react-router";
import {
  ForgotPassword,
  Home,
  About,
  Login,
  Register,
  RegisterComplete,
  Posting,
  Department,

  Constitution,
  Blogs,
  HyperLoop,
  Magazine,
  Gate,

} from "../views";
import Gallery from "../components/homepageSections/Gallery";
import Coordinators from "../views/Coordinators";
import Team2k21 from "../views/Team2k21";
import Team2k20 from "../views/Team2k20";
import Core from "../views/Core2k22";

import Faculty from "../views/Faculty";
import Lab from "../views/Lab";
import ContactForm from "../components/contact/ContactUs";
import Event from "../views/EventPage"
const CommonRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/coordinators" component={Coordinators} />
      <Route exact path="/team2k21" component={Team2k21} />
      <Route exact path="/team2k20" component={Team2k20} />

      <Route exact path="/faculty" component={Faculty} />
      <Route exact path="/lab" component={Lab} />
      <Route exact path="/events" component={Event} />
      <Route exact path="/core" component={Core} />
      
      



      {/* <Route exact path="/gmb-geogrid" component={GmbGeoGrid} /> */}
      <Route exact path="/department" component={Department} />
      {/* <Route exact path="/team" component={Team} /> */}
      {/* <Route exact path="/pricing" component={Pricing} /> */}
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/constitution" component={Constitution} />
      <Route exact path="/magazine" component={Magazine} />
      <Route exact path="/posting" component={Posting} />
      <Route exact path="/gate" component={Gate} />

      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/complete" component={RegisterComplete} />
      <Route exact path="/forgot/password" component={ForgotPassword} />
      <Route exact path="/blogs/hyperloops" component={HyperLoop} />;
      <Route exact path="/contactus" component={ContactForm} />;
    </Switch>
  );
};

export default CommonRoutes;

import React from "react";
import "./Pricing.css";
import { Tabs } from "antd";
import Team2k21 from "./Team2k21";
import Coordinators from "./Coordinators";

const { TabPane } = Tabs;

const Team = () => {
  return (<>
    <Team2k21/>
    <Coordinators/>
    </>
  );
};

export default Team;

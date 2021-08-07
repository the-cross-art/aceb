import React from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css";

const { Panel } = Collapse;

const FaqAccordion = (props) => {
  return (
    <Collapse
      defaultActiveKey={["1"]}
      expandIconPosition="right"
      className="mb-4"
    >
      <Panel header={props.header} key={`${props.key}`}>
        <p>{props.text}</p>
      </Panel>
    </Collapse>
  );
};

export default FaqAccordion;

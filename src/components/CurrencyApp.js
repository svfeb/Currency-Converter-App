import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import CurrencyList from "./CurrencyList";
import Converter from "./Converter";

import "../App.css";

function CurrencyApp() {
  return (
    <div className="App">
      <div className="tab shadow-sm p-3 mb-5 bg-body rounded bg-light text-dark">
        <h1>The Currency App</h1>
        <Tabs
          defaultActiveKey="converter"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="converter" title="Converter">
            <Converter />
          </Tab>
          <Tab eventKey="currencyList" title="Currency List">
            <CurrencyList />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default CurrencyApp;

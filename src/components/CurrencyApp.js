import React, { useState } from "react";
import CurrencyList from "./CurrencyList";
import Converter from "./Converter";

function CurrencyApp(props) {
  const [showConverter, setShowConverter] = useState(false);
  const [showCurrencyList, setShowCurrencyList] = useState(false);

  const handleConverter = () => {
    setShowConverter((current) => !current);
  };

  const change = (e) => {
    setShowConverter(e.target.value);
  };

  const handleCurrencyList = () => {
    setShowCurrencyList((current) => !current);
  };

  return (
    <div>
      <div>
        <h1>{props.Heading}</h1>
        <button
          onClick={handleConverter}
          onChange={change}
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",
            margin: "10px",
          }}
        >
          Converter
        </button>
        {showConverter && <Converter />}
      </div>
      <div>
        <button
          onClick={handleCurrencyList}
          onChange={change}
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",
            margin: "10px",
          }}
        >
          Currency List
        </button>
        {showCurrencyList && <CurrencyList />}
      </div>
    </div>
  );
}

export default CurrencyApp;

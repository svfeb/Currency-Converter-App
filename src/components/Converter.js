import React, { useState } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";
import Data from "./Data";

function Converter() {
  const [from, setFrom] = useState(Data[0]);
  const [to, setTo] = useState(Data[0]);
  const [currencyFrom, setCurrencytFrom] = useState(Data[0].currency);
  const [currencyTo, setCurrencytTo] = useState(Data[0].currency);
  const [amount, setAmount] = useState(0);
  const [output, setOutput] = useState(0);

  function Click() {
    const fromToUSD = +amount / from;
    const USDToTarget = fromToUSD * to;

    Data.forEach((e) => {
      if (+e.exchangeRate === +from) {
        setCurrencytFrom(e.currency);
      }

      if (+e.exchangeRate === +to) {
        setCurrencytTo(e.currency);
      }
    });

    setOutput(Number(USDToTarget));
  }

  const change = (e) => {
    setAmount(e.target.value);
  };

  function flip() {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }
  return (
    <div>
      <h1>Converter</h1>
      <label htmlFor="amount">Amount: </label>

      <input
        value={amount}
        type="number"
        min="0"
        name="amount"
        style={{ margin: "30px" }}
        onChange={change}
        placeholder="0"
        required
      />

      <label htmlFor="From">From: </label>
      <select
        name="From"
        style={{ margin: "30px" }}
        onChange={(e) => {
          setFrom(e.target.value);
        }}
        value={from}
        placeholder="Select From"
      >
        {Data.map((acc) => (
          <option key={acc.id} value={acc.exchangeRate}>
            {acc.currency}
          </option>
        ))}
      </select>

      <HiSwitchHorizontal
        size="20px"
        onClick={() => {
          flip();
        }}
        style={{ margin: "30px", cursor: "pointer" }}
      />
      <label htmlFor="To">To: </label>

      <select
        name="To"
        style={{ margin: "30px" }}
        onChange={(e) => {
          setTo(e.target.value);
        }}
        value={to}
        placeholder="Select From"
      >
        {Data.map((acc) => (
          <option key={acc.id} value={acc.exchangeRate}>
            {acc.currency}
          </option>
        ))}
      </select>

      <button
        className="btn btn-primary my-3"
        style={{ margin: "30px" }}
        onClick={Click}
      >
        Convert
      </button>
      <h3
        id="currencyOutput"
        value={output}
        onChange={(e) => {
          setOutput(e.target.value);
        }}
      >
        Converted Currency:
        {" " +
          amount +
          " " +
          currencyFrom +
          " = " +
          output.toFixed(2) +
          " " +
          currencyTo}
      </h3>
    </div>
  );
}

export default Converter;

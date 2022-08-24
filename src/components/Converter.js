import React, { useState, useEffect } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";
import Data from "./Data";

function Converter() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [input, setInput] = useState("");
  const [inputCurrency, setInputCurrency] = useState(1);
  const [targetCurrency, setTargetCurrency] = useState(0);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = input;
    toAmount = input * exchangeRate;
  } else {
    toAmount = input;
    fromAmount = input / exchangeRate;
  }

  useEffect(() => {
    const firstCurrency = Data.map((inner) => inner.exchangeRate);
    setCurrencyOptions(Data.map((inner) => inner.exchangeRate));
    setFrom(Data.base);
    setTo(firstCurrency);
    setExchangeRate([firstCurrency]);
  }, []);

  // function convert(){
  //   setTargetCurrency(()=>{
  //     if()
  //   })
  // }
  // useEffect(() => {
  //   Data.forEach((o) => {
  //     if (o.currency === to) {
  //       console.log(o);
  //     }
  //   });
  // });
  // const currency = Data.map((key) => {
  //   return key.exchangeRate;
  // });
  // console.log(currency);

  // const [options, setOptions] = useState([]);
  // const [output, setOutput] = useState(0);

  const change = (e) => {
    setInput(e.target.value);
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
        value={input}
        type="number"
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
          <option value={acc.currency}>{acc.currency}</option>
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
          <option value={acc.currency}>{acc.currency}</option>
        ))}
      </select>

      <button className="btn btn-primary my-3" style={{ margin: "30px" }}>
        Convert
      </button>
    </div>
  );
}

export default Converter;

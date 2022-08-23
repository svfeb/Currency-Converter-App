import React, { useState } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";

function Converter() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [input, setInput] = useState(0);

  const change = (e) => {
    setInput(e.target.value);
  };

  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }
  return (
    <div>
      <h1>Converter</h1>
      <label htmlFor="amount">Amount: </label>

      <input
        type="number"
        name="amount"
        style={{ margin: "30px" }}
        onChange={change}
        required
      />

      <label htmlFor="From">From: </label>

      <input type="number" name="From" style={{ margin: "30px" }} required />

      <HiSwitchHorizontal
        size="20px"
        onClick={() => {
          flip();
        }}
        style={{ margin: "30px", cursor: "pointer" }}
      />

      <label htmlFor="To">To: </label>

      <input type="number" name="To" style={{ margin: "30px" }} required />

      <button className="btn btn-primary my-3" style={{ margin: "30px" }}>
        Convert
      </button>
    </div>
  );
}

export default Converter;

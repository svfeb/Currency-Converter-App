import React from "react";
import data from "./Data";
import "../App.css";

function CurrencyList() {
  return (
    <div className="App">
      <h1>Currency List</h1>
      <table>
        <tbody>
          <tr>
            <th>s.no.</th>
            <th>Currency</th>
            <th>Exchange Rate</th>
            <th>Country</th>
            <th>Capital</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.currency}</td>
                <td>{val.exchangeRate}</td>
                <td>{val.country}</td>
                <td>{val.capital}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CurrencyList;

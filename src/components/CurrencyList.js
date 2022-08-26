import React from "react";
import Table from "react-bootstrap/Table";
import data from "./Data";

function CurrencyList() {
  return (
    <div style={{ overflowX: "auto" }}>
      <Table bordered hover>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Currency</th>
            <th>USD Exchange Rate</th>
            <th>Country</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => (
            <tr key={key}>
              <td>{item.id}</td>
              <td>
                {item.currency} - {item.currencySymbol}
              </td>
              <td>{item.exchangeRate}</td>
              <td>{item.country}</td>
              <td>{item.capital}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CurrencyList;

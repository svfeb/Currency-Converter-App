import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Data from "./Data";

function Converter() {
  const [state, setState] = useState({
    sourceId: Data[0].id,
    targetId: Data[0].id,
    sourceExchangeRate: Data[0].exchangeRate,
    targetExchangeRate: Data[0].exchangeRate,
    currencyFrom: Data[0].currency,
    currencyTo: Data[0].currency,
    currencySymbolFrom: Data[0].currencySymbol,
    currencySymbolTo: Data[0].currencySymbol,
    amount: "",
    output: 0,
    showResult: false,
    hideButton: true,
  });

  function convertCurrency() {
    const fromToUSD = state.amount / state.sourceExchangeRate;
    const usdToTarget = fromToUSD * state.targetExchangeRate;
    setState({
      ...state,
      output: usdToTarget,
      showResult: true,
      hideButton: false,
    });
  }

  function changeCurrencySymbol() {
    let fromExchangeRate = "";
    let toExchangeRate = "";
    let fromCurrency = "";
    let fromSymbol = "";
    let toCurrency = "";
    let toSymbol = "";
    Data.forEach((e) => {
      if (+e.id === +state.sourceId) {
        fromCurrency = e.currency;
        fromSymbol = e.currencySymbol;
        fromExchangeRate = e.exchangeRate;
      }
      if (+e.id === +state.targetId) {
        toCurrency = e.currency;
        toSymbol = e.currencySymbol;
        toExchangeRate = e.exchangeRate;
      }
    });
    setState({
      ...state,
      sourceExchangeRate: fromExchangeRate,
      targetExchangeRate: toExchangeRate,
      currencyFrom: fromCurrency,
      currencySymbolFrom: fromSymbol,
      currencyTo: toCurrency,
      currencySymbolTo: toSymbol,
    });
  }

  const changeAmount = (e) => {
    setState({
      ...state,
      showResult: false,
      hideButton: true,
      amount: e.target.value,
    });
  };

  function flipCurrency() {
    let tempExchangeRate = state.sourceExchangeRate;
    let tempCurrencySymbol = state.currencySymbolFrom;
    let tempCurrency = state.currencyFrom;
    let tempId = state.sourceId;

    setState({
      ...state,
      sourceId: state.targetId,
      targetId: tempId,
      currencyFrom: state.currencyTo,
      currencyTo: tempCurrency,
      sourceExchangeRate: state.targetExchangeRate,
      currencySymbolFrom: state.currencySymbolTo,
      currencySymbolTo: tempCurrencySymbol,
      targetExchangeRate: tempExchangeRate,
      showResult: false,
      hideButton: true,
    });
  }

  return (
    <div>
      <Form className="form">
        <Row className="row mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Amount</Form.Label>

            <InputGroup className="mb-3">
              <InputGroup.Text className="noSelect">
                {state.currencySymbolFrom}
              </InputGroup.Text>

              <Form.Control
                placeholder="0.00"
                autoComplete="new-password"
                aria-label="Amount (to the nearest dollar)"
                value={state.amount}
                onChange={changeAmount}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    convertCurrency();
                  }
                }}
              />
              <InputGroup.Text className="noSelect">
                {state.currencySymbolTo}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>From</Form.Label>
            <Form.Select
              value={state.sourceId}
              onChange={(e) => {
                setState({
                  ...state,
                  sourceId: e.target.value,

                  sourceExchangeRate: e.target.value,
                  showResult: false,
                  hideButton: true,
                });
              }}
              onClick={changeCurrencySymbol}
            >
              {Data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.currency}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Col sm="1">
            <span
              className="material-symbols-outlined noSelect"
              onClick={flipCurrency}
            >
              swap_horiz
            </span>
          </Col>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>To</Form.Label>
            <Form.Select
              onChange={(e) => {
                setState({
                  ...state,
                  targetId: e.target.value,

                  targetExchangeRate: e.target.value,
                  showResult: false,
                  hideButton: true,
                });
              }}
              value={state.targetId}
              onClick={changeCurrencySymbol}
            >
              {Data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.currency}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        {state.hideButton && (
          <Button
            className="btn btn-primary"
            variant="primary"
            type="button"
            onClick={convertCurrency}
          >
            Convert
          </Button>
        )}
        {state.showResult && (
          <div>
            <p
              id="currencyOutput"
              value={state.output}
              onChange={(e) => {
                setState({ ...state, output: e.target.value });
              }}
            >
              {" " + state.amount + " " + state.currencyFrom + " = "}
            </p>
            <h3> {state.output.toFixed(2) + " " + state.currencyTo}</h3>
          </div>
        )}
      </Form>
    </div>
  );
}
export default Converter;

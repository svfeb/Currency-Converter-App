import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Data from "./Data";

function Converter() {
  const [from, setFrom] = useState(Data[0].exchangeRate);
  const [to, setTo] = useState(Data[0].exchangeRate);
  const [currencyFrom, setCurrencytFrom] = useState(Data[0].currency);
  const [currencyTo, setCurrencytTo] = useState(Data[0].currency);
  const [currencySymbolFrom, setCurrencySymbolFrom] = useState(
    Data[0].currencySymbol
  );
  const [amount, setAmount] = useState("");
  const [output, setOutput] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [hideButton, setHideButton] = useState(true);

  function convert() {
    const fromToUSD = +amount / from;
    const USDToTarget = fromToUSD * to;
    setShowResult(true);
    setHideButton(false);
    setOutput(USDToTarget);
  }

  function changeCurrencySymbol() {
    Data.forEach((e) => {
      if (+e.exchangeRate === +from) {
        setCurrencytFrom(e.currency);
      }

      if (+e.exchangeRate === +to) {
        setCurrencytTo(e.currency);
      }

      if (+e.exchangeRate === +from) {
        setCurrencySymbolFrom(e.currencySymbol);
      }
    });
  }

  const change = (e) => {
    setAmount(e.target.value);
    setShowResult(false);
    setHideButton(true);
  };

  function flip() {
    const temp = from;
    setFrom(to);
    setTo(temp);
    Data.forEach((e) => {
      if (+e.exchangeRate === +to) {
        setCurrencytFrom(e.currency);
      }

      if (+e.exchangeRate === +from) {
        setCurrencytTo(e.currency);
      }

      if (+e.exchangeRate === +to) {
        setCurrencySymbolFrom(e.currencySymbol);
      }
    });
  }

  return (
    <div>
      <Form className="form">
        <Row className="row mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Amount</Form.Label>

            <InputGroup className="mb-3">
              <InputGroup.Text>{currencySymbolFrom}</InputGroup.Text>

              <Form.Control
                placeholder="0.00"
                aria-label="Amount (to the nearest dollar)"
                value={amount}
                onChange={change}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>From</Form.Label>
            <Form.Select
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
              }}
              onMouseOut={changeCurrencySymbol}
              onMouseOver={changeCurrencySymbol}
            >
              {Data.map((item) => (
                <option key={item.id} value={item.exchangeRate}>
                  {item.currency}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Col sm="1">
            <span className="material-symbols-outlined" onClick={flip}>
              swap_horiz
            </span>
          </Col>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>To</Form.Label>
            <Form.Select
              onChange={(e) => {
                setTo(e.target.value);
              }}
              value={to}
              onMouseOut={changeCurrencySymbol}
              onMouseOver={changeCurrencySymbol}
            >
              {Data.map((item) => (
                <option key={item.id} value={item.exchangeRate}>
                  {item.currency}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        {hideButton && (
          <Button
            className="btn btn-primary"
            variant="primary"
            type="button"
            onClick={convert}
          >
            Convert
          </Button>
        )}
        {showResult && (
          <div>
            <p
              id="currencyOutput"
              value={output}
              onChange={(e) => {
                setOutput(e.target.value);
              }}
            >
              {" " + amount + " " + currencyFrom + " = "}
            </p>
            <h3> {output.toFixed(2) + " " + currencyTo}</h3>
          </div>
        )}
      </Form>
    </div>
  );
}

export default Converter;

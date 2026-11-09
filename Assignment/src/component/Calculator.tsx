
import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [first, setFirst] = useState<number | null>(null);
  const [operator, setOperator] = useState("");
  const [expression, setExpression] = useState("");
  const [reset, setReset] = useState(false);


  const handleNumber = (value: string) => {
    if (reset) {
      setDisplay(value === "." ? "0." : value);
      setReset(false);
      return;
    }

    if (value === "." && display.includes(".")) return;

    if (display === "0" && value !== ".") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };


  const handleOperator = (op: string) => {
    setFirst(Number(display));
    setOperator(op);
    setExpression(display + " " + op);
    setReset(true);
  };


  const calculate = () => {
    if (first === null || !operator) return;

    const second = Number(display);
    let result = 0;

    if (operator === "+") {
      result = first + second;
    } 
    else if (operator === "-") {
      result = first - second;
    } 
    else if (operator === "*") {
      result = first * second;
    } 
    else if (operator === "/") {
      if (second === 0) {
        setDisplay("Error");
        setExpression("");
        setFirst(null);
        setOperator("");
        setReset(true);
        return;
      }

      result = first / second;
    }

    setDisplay(String(Number(result.toFixed(10))));
    setExpression("");
    setFirst(null);
    setOperator("");
    setReset(true);
  };

  const clear = () => {
    setDisplay("0");
    setFirst(null);
    setOperator("");
    setExpression("");
    setReset(false);
  };

  const remove = () => {
    if (reset) {
      setDisplay("0");
      setExpression("");
      setReset(false);
      return;
    }

    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>

      <div className="display">
        {operator
          ? reset
            ? expression
            : `${expression} ${display}`
          : display}
      </div>

      <div className="buttons">
        <button onClick={clear}>C</button>
        <button onClick={remove}>⌫</button>
        <button onClick={() => handleOperator("/")}>÷</button>
        <button onClick={() => handleOperator("*")}>×</button>

        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleOperator("-")}>−</button>

        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={() => handleOperator("+")}>+</button>

        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <button onClick={calculate}>=</button>

        <button className="zero" onClick={() => handleNumber("0")}>0</button>
        <button onClick={() => handleNumber(".")}>.</button>
      </div>
    </div>
  );
}

export default Calculator;

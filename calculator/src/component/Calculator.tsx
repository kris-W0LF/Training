
import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState<string>("");

  const handleClick = (value: string): void => {
    if (input === "Error") {
      setInput(value);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const clearInput = (): void => {
    setInput("");
  };

  const deleteLast = (): void => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = (): void => {
    try {
    
      if (!/^[0-9+\-*/.() ]+$/.test(input)) {
        setInput("Error");
        return;
      }

     
      const result = Function(`"use strict"; return (${input})`)();

      if (typeof result !== "number" || !Number.isFinite(result)) {
        setInput("Error");
        return;
      }

      setInput(String(Number(result.toFixed(10))));
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>

      <input
        type="text"
        value={input}
        className="display"
        readOnly
        placeholder="0"
      />

      <div className="buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={deleteLast}>⌫</button>
        <button onClick={() => handleClick("/")}>÷</button>
        <button onClick={() => handleClick("*")}>×</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("-")}>−</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={calculate} className="equal">=</button>

        <button
          className="zero"
          onClick={() => handleClick("0")}
        >
          0
        </button>

        <button onClick={() => handleClick(".")}>.</button>
      </div>
    </div>
  );
}

export default Calculator;

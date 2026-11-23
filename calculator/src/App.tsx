
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  function handleClick(value: string) {
    setInput((prev) => prev + value);
  }

  function clearInput() {
    setInput("");
  }

  function deleteLast() {
    setInput(input.slice(0, -1));
  }


  
function calculate() {
  try {
    let expression = input;

   
    while (expression.includes("(")) {
      const start = expression.lastIndexOf("(");
      const end = expression.indexOf(")", start);

      if (end === -1) {
        throw new Error("Invalid brackets");
      }

      const inside = expression.slice(start + 1, end);

      const value = calculateSimple(inside);

      expression =
        expression.slice(0, start) +
        value +
        expression.slice(end + 1);
    }

    if (expression.includes(")")) {
      throw new Error("Invalid brackets");
    }

   
    const result = calculateSimple(expression);

    setInput(String(Number(result.toFixed(10))));
  } catch {
    setInput("Error");
  }
}


function calculateSimple(input: string): number {
  let numbers: number[] = [];
  let operators: string[] = [];
  let number = "";

  
  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (
      (char >= "0" && char <= "9") ||
      char === "."
    ) {
      number += char;
    } else {
      if (number !== "" && number !== "-") {
        numbers.push(Number(number));
        number = "";
      }

      if (
        char === "-" &&
        (i === 0 ||
          ["+", "-", "*", "/", "("].includes(input[i - 1]))
      ) {
        number = "-";
      } else {
        operators.push(char);
      }
    }
  }

  if (number !== "" && number !== "-") {
    numbers.push(Number(number));
  }

  if (numbers.length !== operators.length + 1) {
    throw new Error("Invalid expression");
  }

 
  for (let i = 0; i < operators.length; i++) {
    if (
      operators[i] === "*" ||
      operators[i] === "/"
    ) {
      const left = numbers[i];
      const right = numbers[i + 1];

      if (operators[i] === "/" && right === 0) {
        throw new Error("Cannot divide by zero");
      }

      const result =
        operators[i] === "*"
          ? left * right
          : left / right;

      numbers.splice(i, 2, result);
      operators.splice(i, 1);
      i--;
    }
  }

 
  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+") {
      result += numbers[i + 1];
    } else if (operators[i] === "-") {
      result -= numbers[i + 1];
    }
  }

  if (!Number.isFinite(result)) {
    throw new Error("Invalid expression");
  }

  return result;
}

  return (
    <div className="calculator">
      <h2>Calculator</h2>

      <input
        type="text"
        value={input}
        className="display"
        readOnly
      />

      <div className="buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={() => handleClick("(")}>(</button>
        <button onClick={() => handleClick(")")}> ) </button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;

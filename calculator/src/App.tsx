import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");

  function handleClick(value: string) {
    setInput((prev) => prev + value);
  }

  function clearInput() {
    setInput("");
  }

  function deleteLast() {
    setInput((prev) => prev.slice(0, -1));
  }

 
  function precedence(operator: string): number {
    if (operator === "*" || operator === "/") {
      return 2;
    }

    return 1;
  }

  function applyOperation(
    numbers: number[],
    operators: string[]
  ) {
    const operator = operators.pop();
    const right = numbers.pop();
    const left = numbers.pop();

    if (
      operator === undefined ||
      right === undefined ||
      left === undefined
    ) {
      throw new Error("Invalid expression");
    }

    let result = 0;

    if (operator === "+") {
      result = left + right;
    } else if (operator === "-") {
      result = left - right;
    } else if (operator === "*") {
      result = left * right;
    } else if (operator === "/") {
      if (right === 0) {
        throw new Error("Cannot divide by zero");
      }

      result = left / right;
    }

    numbers.push(result);
  }

 
  function calculateExpression(expression: string): number {
    const numbers: number[] = [];
    const operators: string[] = [];

    let number = "";

    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];

      if (char === "(") {
        if (number !== "") {
          numbers.push(Number(number));
          number = "";
        }

        if (
          i > 0 &&
          (expression[i - 1] === ")" ||
            (i > 0 && /[0-9.]/.test(expression[i - 1])))
        ) {
          while (
            operators.length > 0 &&
            operators[operators.length - 1] !== "(" &&
            precedence(operators[operators.length - 1]) >= 2
          ) {
            applyOperation(numbers, operators);
          }

          operators.push("*");
        }

        operators.push("(");
      }

    
      else if (
        (char >= "0" && char <= "9") ||
        char === "."
      ) {
        number += char;
      }

     
      else if (char === ")") {
        if (number !== "") {
          numbers.push(Number(number));
          number = "";
        }

        if (!operators.includes("(")) {
          throw new Error("Invalid brackets");
        }

        while (
          operators.length > 0 &&
          operators[operators.length - 1] !== "("
        ) {
          applyOperation(numbers, operators);
        }

        operators.pop();

        
        if (
          i + 1 < expression.length &&
          /[0-9.]/.test(expression[i + 1])
        ) {
          operators.push("*");
        }
      }

     
      else if (["+", "-", "*", "/"].includes(char)) {
        // Negative number
        if (
          char === "-" &&
          (i === 0 ||
            ["+", "-", "*", "/", "("].includes(expression[i - 1]))
        ) {
          if (number !== "") {
            throw new Error("Invalid expression");
          }

          number = "-";
          continue;
        }

        if (number !== "") {
          numbers.push(Number(number));
          number = "";
        }

        while (
          operators.length > 0 &&
          operators[operators.length - 1] !== "(" &&
          precedence(operators[operators.length - 1]) >=
            precedence(char)
        ) {
          applyOperation(numbers, operators);
        }

        operators.push(char);
      } else {
        throw new Error("Invalid character");
      }
    }

    if (number !== "" && number !== "-") {
      numbers.push(Number(number));
    }

    while (operators.length > 0) {
      if (operators[operators.length - 1] === "(") {
        throw new Error("Invalid brackets");
      }

      applyOperation(numbers, operators);
    }

    if (
      numbers.length !== 1 ||
      !Number.isFinite(numbers[0])
    ) {
      throw new Error("Invalid expression");
    }

    return numbers[0];
  }

 
  function calculate() {
    try {
      if (input.trim() === "") {
        return;
      }

      const result = calculateExpression(input);

      setInput(String(Number(result.toFixed(10))));
    } catch {
      setInput("Error");
    }
  }

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


import React, { useState } from "react";
import "./App2.css";

const App2 = () => {
  const [data, setData] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState(null);

  const handleButton = (e) => {
    setData(data.concat(e.target.value));
    setError(null); // clear any previous error when typing
  };

  const handleCalculation = () => {
    // if input empty or ends with operator
    if (!data || /[+\-*/]$/.test(data)) {
      showError("Error: Incomplete or empty expression");
      setResult("Error");
      return;
    }

    try {
      setResult(eval(data));
    } catch {
      showError("Error: Invalid Expression");
      setResult("Error");
    }
  };

  const handleClear = () => {
    setData("");
    setResult(0);
    setError(null);
  };

  // Function to show error and hide it after 3 seconds
  const showError = (message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 3000); // hide error after 3 seconds
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <div>
        <input type="text" placeholder="0" readOnly value={data} />
      </div>
      <div>Result is here: {result}</div>

      {/* Error message */}
      {error && <div className="error-message">{error}</div>}

      <br />

      <button value="7" onClick={handleButton}>7</button>
      <button value="8" onClick={handleButton}>8</button>
      <button value="9" onClick={handleButton}>9</button>
      <button value="+" onClick={handleButton}>+</button>

      <button value="4" onClick={handleButton}>4</button>
      <button value="5" onClick={handleButton}>5</button>
      <button value="6" onClick={handleButton}>6</button>
      <button value="-" onClick={handleButton}>-</button>

      <button value="1" onClick={handleButton}>1</button>
      <button value="2" onClick={handleButton}>2</button>
      <button value="3" onClick={handleButton}>3</button>
      <button value="*" onClick={handleButton}>*</button>

      <button value="C" onClick={handleClear}>C</button>
      <button value="0" onClick={handleButton}>0</button>
      <button value="=" onClick={handleCalculation}>=</button>
      <button value="/" onClick={handleButton}>/</button>
    </div>
  );
};

export default App2;

import React, { useState } from "react";
import "./App2.css";

const App2 = () => {
    const [data,setData]=useState('');
    const [result,setResult]=useState(0);
    const handleButton = (e) => {
        console.log('button clicked', e.target.value);
        //setData(e.target.value);
        setData(data.concat(e.target.value));
    }
    const handleCalculation = () => {
setResult(eval(data));
    }
    const handleClear =()=>{
        setData('');
        setResult(0);
    }
  return (
    <>
      <div className="calculator">
        <h2>React Calculator</h2>
        <div><input type="text" placeholder="0" readOnly value={data}/></div>
        <div>Result is here:{result}</div>
        <br />

        <button value='7' onClick={handleButton}>7</button>
        <button value='8' onClick={handleButton}>8</button>
        <button value='9' onClick={handleButton}>9</button>
        <button value='+' onClick={handleButton}>+</button>

        <button value='4' onClick={handleButton}>4</button>
        <button value='5' onClick={handleButton}>5</button>
        <button value='6' onClick={handleButton}>6</button>
        <button value='-' onClick={handleButton}>-</button>

        <button value='1' onClick={handleButton}>1</button>
        <button value='2' onClick={handleButton}>2</button>
        <button value='3' onClick={handleButton}>3</button>
        <button value='*' onClick={handleButton}>*</button>

        <button value='C' onClick={handleClear}>C</button>
        <button value='0' onClick={handleButton}>0</button>
        <button value='=' onClick={handleCalculation}>=</button>
        <button value='/' onClick={handleButton}>/</button>
      </div>
    </>
  );
};

export default App2;

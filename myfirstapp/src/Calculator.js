import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setResult('');
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setInput('');
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };
  // const handleKey=(value)=>{
  //   try{
  //     setInput(input + value);
  //   }
  //   catch{
  //     setResult('Error of key');
  //   }
  // }

  return (
    <div className="calculator" onKeyUp={(e)=>{
      handleButtonClick(e.key)
    }}>
      <div className="input result" id="input">{input}{result}</div>
      <div className="buttons">
        <div className="row">
          <button id="7" onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleClear()}>C</button>
          <button onClick={() => handleCalculate()}>=</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
      </div>
      {/* <div className="result">{result}</div> */}
    </div>
  );
};

export default Calculator;

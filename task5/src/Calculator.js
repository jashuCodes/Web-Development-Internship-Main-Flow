import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (e) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator" role="region" aria-label="Calculator">
      <h1 className="title">Calculator</h1>
      <div className="display">
        <div className="input" aria-live="polite">{input}</div>
        <div className="result" aria-live="polite">{result}</div>
      </div>
      <div className="buttons">
        {['1', '2', '3', '+'].map(value => (
          <button key={value} onClick={() => handleClick(value)} aria-label={`Add ${value}`}>{value}</button>
        ))}
        {['4', '5', '6', '-'].map(value => (
          <button key={value} onClick={() => handleClick(value)} aria-label={`Add ${value}`}>{value}</button>
        ))}
        {['7', '8', '9', '*'].map(value => (
          <button key={value} onClick={() => handleClick(value)} aria-label={`Add ${value}`}>{value}</button>
        ))}
        {['0', '.', '=', '/'].map(value => (
          <button key={value} onClick={value === '=' ? handleCalculate : () => handleClick(value)} aria-label={`Add ${value}`}>{value}</button>
        ))}
        <button onClick={handleClear} aria-label="Clear input">C</button>
      </div>
    </div>
  );
};

export default Calculator;

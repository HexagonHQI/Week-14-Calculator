import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('+');

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    if (name === 'num1') {
      setNum1(value);
    } else if (name === 'num2') {
      setNum2(value);
    }
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const handleCalculate = () => {
    let calculatedResult;
    switch (operation) {
      case '+':
        calculatedResult = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        calculatedResult = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        calculatedResult = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        calculatedResult = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        calculatedResult = 0;
    }
    setResult(calculatedResult);
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <input
        type="number"
        name="num1"
        value={num1}
        onChange={handleInputChange}
      />
      <select value={operation} onChange={handleOperationChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        name="num2"
        value={num2}
        onChange={handleInputChange}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './components/Input';
import Button from './components/Button';

const AppContainer = styled.div`
  width: 320px;
  border: 2px solid #61dafb;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  background-color: #20232a;
`;

const ButtonRow = styled.div`
  display: flex;
  width: 100%;
`;

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const clearState = () => {
    setCurrentValue('0');
    setFirstValue(null);
    setOperation(null);
  };

  const addNumber = (num) => {
    if (operation && operation.justClicked) {
      setCurrentValue(num);
      setOperation({ ...operation, justClicked: false });
    } else {
      setCurrentValue(prev => (prev === '0' ? num : prev + num));
    }
  };

  const addDecimal = () => {
    if (currentValue.includes('.')) return;
    setCurrentValue(prev => prev + '.');
  };

  const addOperation = (op) => {
    if (firstValue === null) {
      setFirstValue(Number(currentValue));
      setOperation({ op: op, justClicked: true });
    } else if (operation && !operation.justClicked) {
      calculate();
      setOperation({ op: op, justClicked: true });
    } else {
      setOperation({ op: op, justClicked: true });
    }
  };

  const calculate = (clearOp = true) => {
    if (!firstValue || !operation || operation.justClicked) return;

    const secondValue = Number(currentValue);
    let result = 0;

    switch (operation.op) {
      case '+':
        result = firstValue + secondValue;
        break;
      case '-':
        result = firstValue - secondValue;
        break;
      case '*':
        result = firstValue * secondValue;
        break;
      case '/':
        result = firstValue / secondValue;
        break;
      default:
        return;
    }
    
    const resultString = String(result);
    setCurrentValue(resultString);
    setFirstValue(result);
    if (clearOp) {
      setOperation(null);
    }
  };

  return (
    <AppContainer>
      <Input value={currentValue} />
      <ButtonRow>
        <Button label="AC" onClick={clearState} triple />
        <Button label="/" onClick={() => addOperation('/')} operation />
      </ButtonRow>
      <ButtonRow>
        <Button label="7" onClick={() => addNumber('7')} />
        <Button label="8" onClick={() => addNumber('8')} />
        <Button label="9" onClick={() => addNumber('9')} />
        <Button label="x" onClick={() => addOperation('*')} operation />
      </ButtonRow>
      <ButtonRow>
        <Button label="4" onClick={() => addNumber('4')} />
        <Button label="5" onClick={() => addNumber('5')} />
        <Button label="6" onClick={() => addNumber('6')} />
        <Button label="-" onClick={() => addOperation('-')} operation />
      </ButtonRow>
      <ButtonRow>
        <Button label="1" onClick={() => addNumber('1')} />
        <Button label="2" onClick={() => addNumber('2')} />
        <Button label="3" onClick={() => addNumber('3')} />
        <Button label="+" onClick={() => addOperation('+')} operation />
      </ButtonRow>
      <ButtonRow>
        <Button label="0" onClick={() => addNumber('0')} double />
        <Button label="." onClick={addDecimal} />
        <Button label="=" onClick={() => calculate(true)} operation />
      </ButtonRow>
    </AppContainer>
  );
}

export default App;
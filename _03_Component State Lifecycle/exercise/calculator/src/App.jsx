import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [result, setResult] = useState(0);

  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleAddition = () => {
    setResult(parseInt(inputValue1) + parseInt(inputValue2));
  };

  const handleSubtraction = () => {
    setResult(parseInt(inputValue1) - parseInt(inputValue2));
  };

  const handleMultiplication = () => {
    setResult(parseInt(inputValue1) * parseInt(inputValue2));
  };

  const handleDivision = () => {
    setResult(parseInt(inputValue1) / parseInt(inputValue2));
  };

  return (
    <div id='app'>
      <form action="#">
        <input type="number" onChange={handleChange1} value={inputValue1} /><br/>
        <input type="number" onChange={handleChange2} value={inputValue2} /><br/>
        <p>Result: {result}</p>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>x</button>
        <button onClick={handleDivision}>/</button>
      </form>
      <p>Giá trị thứ 1: {inputValue1}</p>
      <p>Giá trị thứ 2: {inputValue2}</p>
    </div>
  );
}

export default App;

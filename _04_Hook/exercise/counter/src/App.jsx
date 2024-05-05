import logo from './logo.svg';
import './App.css';
import { useState } from'react';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="App">
      <h2>{count1}</h2>
      <button onClick={()=>{setCount1(count1+1)}}>Add 1</button>
      <h2>{count2}</h2>
      <button onClick={()=>{setCount2(count2+2)}}>Add 2</button>
    </div>
  );
}

export default App;

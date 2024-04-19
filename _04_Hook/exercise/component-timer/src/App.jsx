import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timer, setTimer] = useState(5);
  
  useEffect(() => {
    console.log("useEffect đã kích hoạt!");
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  console.log("Xin chào");
  console.log(timer);


  if(timer == 0){
    alert("Hết thời gian")
  }
  
  return (
    <div className='App'>
      <h1>Timer: {timer}</h1>
    </div>
  );
};

export default App;

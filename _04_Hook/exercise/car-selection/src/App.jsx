import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("red");
  const [nameCar, setNameCar] = useState("Mercedes S600");
  
  const handleCarChange = (event) => {
    setNameCar(event.target.value);
  }

  const handleColorChange = (event) => {
    setColor(event.target.value);
  }

  return (
    <div className="App">
      <h2>Select your car</h2>
      <label htmlFor="">Select a car</label>
      <select name="" id="" onChange={handleCarChange}>
        <option value="Mercedes S600">Mercedes S600</option>
        <option value="Toyota">Toyota</option>
        <option value="Yamaha">Yamaha</option>
        <option value="Vin">Vin</option>
      </select>
      <br />
      <label htmlFor="">Select a color</label>
      <select name="" id="" onChange={e => handleColorChange(e)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="orange">Orange</option>
      </select>
      <br />
      <hr />
      <b>You selected a {color} - {nameCar}</b>
    </div>
  );
}

export default App;

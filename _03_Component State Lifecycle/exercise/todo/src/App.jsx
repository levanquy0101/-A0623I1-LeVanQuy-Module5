import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listTodo, setListTodo] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleAddTodo = () => {
    setListTodo([...listTodo, inputValue]);
    setInputValue("");
  }

  return (
    <div className="App">
      <input 
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {listTodo.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="login">Trang đăng nhập</Link>
      </header>
    </div>
  );
}

export default App;

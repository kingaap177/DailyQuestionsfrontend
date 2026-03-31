import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyButton />
        </p>
      </header>
    </div>
  );
}

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/ui/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Input type="text" name="demo" labelName="Email" />
    </div>
  );
}

export default App;

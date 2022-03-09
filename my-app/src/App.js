import logo from './logo.svg';
import './App.css';
// import GameWrapper from './components/GameWrapper';
// import ClassWrapper from './components/ClassWrapper';
import React,{useState} from 'react';
import BasicInformationPage from './components/containers/BasicInformationPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BasicInformationPage></BasicInformationPage>
        {/* <ClassWrapper></ClassWrapper> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

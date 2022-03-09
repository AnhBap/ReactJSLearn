import logo from './logo.svg';
import './App.css';
// import GameWrapper from './components/GameWrapper';
// import ClassWrapper from './components/ClassWrapper';
import React,{useState} from 'react';
// import BasicInformationPage from './components/containers/BasicInformationPage';
import ToDoList  from './components/containers/ToDoList';
function App() {
  return (
    <div className="App">
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import SignIn from './page/login';
import Dashboard from './page/dashboard';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;

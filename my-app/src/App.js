import './App.css';
// import GameWrapper from './components/GameWrapper';
// import ClassWrapper from './components/ClassWrapper';
import React,{useState} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from 'react-redux';
import store from "./redux/store";
import User from "./components/User";
// import BasicInformationPage from './components/containers/BasicInformationPage';
import MyRedux  from './components/redux';
function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <div className="main-route-place">
                <Route exact path="/" component={Login} />
                <Route path="/users" component={User} />
            </div>
            <MyRedux></MyRedux>
        </BrowserRouter>
    </Provider>
);
}

export default App;

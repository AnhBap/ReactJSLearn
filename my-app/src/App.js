import './App.css';
import { ThemeProvider } from 'styled-components';
// import GameWrapper from './components/GameWrapper';
// import ClassWrapper from './components/ClassWrapper';
import React from 'react';
import { connect, Provider } from 'react-redux';
// import BasicInformationPage from './components/containers/BasicInformationPage';
//import ListProducts from './pages/ListProducts';
import Login from './components/saga/Login';
import User from './components/saga/User';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import store from './components/saga/redux/store';
import theme from './constants/theme';
import CaculatorNum from './components/ThucHanh/CaculatorNum';

import ListFruit from './pages/Ontap';
const RouteApp = () => {
  let routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "users", element: <User /> },
    // ...
  ]);
  return routes;
};
function App() {
  return (
    <Provider store={store}>
       <Router>
       <ListFruit></ListFruit>
      {/* <RouteApp /> */}
    </Router>

     
        
    </Provider>
    // <ThemeProvider theme={theme}>
    //   <div className="App">
    //     <header className="App-header">
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //     {/* <ListProducts /> */}
    //     <CaculatorNum/>
    //   </div>
    // </ThemeProvider>
  );
}
const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

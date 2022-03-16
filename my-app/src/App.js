import './App.css';
import { ThemeProvider } from 'styled-components';
// import GameWrapper from './components/GameWrapper';
// import ClassWrapper from './components/ClassWrapper';
import React from 'react';
import { connect } from 'react-redux';
// import BasicInformationPage from './components/containers/BasicInformationPage';
import ListProducts from './pages/ListProducts';
import theme from './constants/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        <ListProducts />
      </div>
    </ThemeProvider>
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

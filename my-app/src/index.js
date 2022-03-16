import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import reduxToturialReducer from './components/redux/reducer';
import { Route } from 'react-router-dom';


const myStore = createStore(reduxToturialReducer);
const rootProducer = combineReducers(
  {
    reduxToturialReducer
  }
)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Route history={history}>
        <App />
      </Route>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

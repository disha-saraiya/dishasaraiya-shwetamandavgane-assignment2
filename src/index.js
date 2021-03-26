import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './reducers'; 
import {createStore} from 'redux'; 
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer); 

ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

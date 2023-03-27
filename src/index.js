import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/// 1. import react-redux and redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootreducer from "./reducers"

/// 3. combine multiple reducers

/// 4. create redux store
const store = createStore(rootreducer, composeWithDevTools());

/// 5. provice redux store to the entire app

ReactDOM.render(
<React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
</React.StrictMode>,
document.getElementById('root')
);


reportWebVitals();

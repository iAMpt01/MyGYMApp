import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/// 1. import react-redux and redux
import {createStore, combineReducers} from 'redux' //un magazin redux
import {Provider} from 'react-redux'// gestionarea starii app
import { composeWithDevTools } from 'redux-devtools-extension'; //mag redux infasurat in dev pt debb
import rootreducer from "./reducers"
import react, {Fragment} from 'react';

/// 3. combine multiple reducers

/// 4. create redux store
const store = createStore(rootreducer, composeWithDevTools());

/// 5. provice redux store to the entire app

ReactDOM.render(
<React.StrictMode>
{/* pt a furniza magazinul intregii aplicatii */}
  <Provider store={store}> 
  <App />
  </Provider>
</React.StrictMode>,
document.getElementById('root')
);


reportWebVitals();


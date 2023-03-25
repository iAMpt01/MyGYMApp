import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/// 1. import react-redux and redux
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
/// 2. create user reducer function
// {type:'logged', payload:{name:Rayan, role:'seller'}}
const authReducer = (state={}, action) => {
    switch(action.type){
      case "Logged_in-user":
        return{...state, ...action.payload};
      case "Logout":
        return action.payload;
      default:
        return state;
    }
};

/// 3. combine multiple reducers
const rootreducer = combineReducers({
    user: authReducer,
});

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

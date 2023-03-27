import {combineReducers} from 'redux'
import {authReducer} from "./auth"


const rootreducer = combineReducers({
    user: authReducer,
});

export default rootreducer;


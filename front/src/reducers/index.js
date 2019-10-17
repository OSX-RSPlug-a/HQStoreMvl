import counterReducer from "./counter"
import loggedReducer from "./logged";

import { combineReducers } from "redux"

const allReducers = combineReducers({ 
    counter: counterReducer, 
    logged: loggedReducer 
});

export default allReducers;
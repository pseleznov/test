import { createStore, combineReducers } from "redux"
import bodyReducer from './bodyReducer'
import headerReducer from './headerReducer'


let reducers = combineReducers({
    pageHeader: headerReducer,
    pageBody: bodyReducer
});

let store = createStore(reducers);



export default store;
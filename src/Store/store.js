import { createStore, combineReducers } from "redux"
import bodyReducer from './bodyReducer'
import headerReducer from './headerReducer'


let reducers = combineReducers({
    headerPart: headerReducer,
    bodyPart: bodyReducer
});

let store = createStore(reducers);

export default store;
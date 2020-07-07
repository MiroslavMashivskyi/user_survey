import { createStore, combineReducers } from "redux";
import Reducer from './reducers/reducer';

let reducers = combineReducers({
    question: Reducer,
});

let store = createStore(reducers);

export default store;
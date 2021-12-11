import { createStore } from "redux";
import ReducerData from './Reducer';

const initialState = {};
const store = createStore(ReducerData, initialState);


export default store;
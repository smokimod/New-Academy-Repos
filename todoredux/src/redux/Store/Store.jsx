import { createStore } from "redux";
import { addTodoReducer } from "../Reduce/Reduce";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducers = (addTodoReducer);

export const store = createStore(rootReducers, composeWithDevTools());

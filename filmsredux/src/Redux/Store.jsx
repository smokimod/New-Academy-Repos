import { applyMiddleware, createStore, combineReducers } from "redux";
import { searchReducer, paginatorReducer } from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  search: searchReducer,
  paginator: paginatorReducer,
});

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

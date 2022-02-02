import { ActionsOfTodo } from "./Actions";
const initialState = {
  arr: [],
  page: 0,
  val: "",
  type: "movie",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsOfTodo.ADD_MOVIES:
      return {
        ...state,
        arr: action.payload.Search,
        page: action.payload.totalResults,
      };
    default:
      return state;
  }
};

export const paginatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsOfTodo.SHOW_DETAILS:
      return {
        ...state,
        val: action.payload.value,
        type: action.payload.type,
      };
    default:
      return state;
  }
};

export const addMovies = (payload) => ({
  type: ActionsOfTodo.ADD_MOVIES,
  payload,
});

export const showDetails = (payload) => {
  return {
    type: ActionsOfTodo.SHOW_DETAILS,
    payload,
  };
};

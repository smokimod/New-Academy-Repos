import { ActionsOfTodo } from "./Actions";

const inetValue = {
  array: [],
};

export const addTodoReducer = (state = inetValue, action) => {
  switch (action.type) {
    case ActionsOfTodo.ADD_TODO:
      return { ...state, array: [...state.array, action.payload] };
    case ActionsOfTodo.DELETE_TODO:
      return {
        ...state,
        array: state.array.filter((item) => item.id !== action.payload),
      };
    case ActionsOfTodo.COMPLITE_TODO:
      return {
        ...state,
        array: state.array.map((item) => {
          if (item.checkId === action.payload && item.isChecked === false) {
            item.isChecked = true;
           
          } else if (
            item.checkId === action.payload &&
            item.isChecked === true
          ) {
            item.isChecked = false;
          }
          return item;
        }),
      };
    case ActionsOfTodo.REMOVE_CHECKED:
      return {
        ...state,
        array: state.array.filter((item) => item.isChecked !== true),
      };

    default:
      return state;
  }
};

export const addTodo = (payload) => ({ type: ActionsOfTodo.ADD_TODO, payload });
export const deleteTodo = (payload) => ({
  type: ActionsOfTodo.DELETE_TODO,
  payload,
});

export const checkTodo = (payload) => ({
  type: ActionsOfTodo.COMPLITE_TODO,
  payload,
});

export const delCheck = (payload) => ({
  type: ActionsOfTodo.REMOVE_CHECKED,
  payload,
});

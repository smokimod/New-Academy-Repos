import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/Reduce/Reduce";

export const Forma = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const setValueOfTodo = (e) => {
    setValue(e.target.value);
  };

  const addElem = () => {
    if (value.length === 0) {
      return null;
    }
    const params = {
      id: Math.random() * 1000,
      checkId: Math.random() * 1000,
      isChecked: false,
      valueofTodo: value,
    };
    dispatch(addTodo(params));
    setValue("");
  };

  return (
    <>
      <header className="title">
        <h1>TODOLIST </h1>
      </header>
      <div className="forma">
        <input
          type="text"
          placeholder="Enter the task"
          className="todo_input"
          value={value}
          onChange={setValueOfTodo}
        />
        <button className="todo_button" onClick={addElem}>
          Add
        </button>
      </div>
    </>
  );
};

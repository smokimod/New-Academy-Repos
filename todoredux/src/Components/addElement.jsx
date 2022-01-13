import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, checkTodo } from "../redux/Reduce/Reduce";
import { useEffect } from "react";

export const AddElement = () => {
  const dispath = useDispatch();
  const array = useSelector((state) => state.array);

  console.log(array);

  const removeTodo = (item) => {
    dispath(deleteTodo(item.id));
  };

  const compliteTodo = (item) => {
    dispath(checkTodo(item.checkId));
  };

  const editTodo = (e) => {
    const target = e.target;
    const prev = target.previousSibling;
    const inputCreate = document.createElement("input");
    inputCreate.value = prev.textContent;
    inputCreate.className = "input_text";
    prev.replaceWith(inputCreate);
  };

  const acceptChanges = (e) => {
    const lit = document.querySelectorAll(".input_text");
    if (e.key === "Enter") {
      for (let i = 0; i < lit.length; i++) {
        const chengeLi = document.createElement("li");
        chengeLi.textContent = lit[i].value;
        lit[i].replaceWith(chengeLi);
      }
    }
  };

  useEffect(() => {
    const spanOne = document.querySelector(".spanOne");
    let w = array.filter((del) => del.isChecked === true);
    const oneChange = w.length;
    return (spanOne.textContent = `${oneChange}`);
  });
  const aa = () => {
    array.map((item) =>
      item.isChecked === true ? (item.className = "completedItem") : item
    );
  };

  return (
    <>
      {array.map((item) => (
        <div
          className="todo"
          id={item.id}
          checked={item.checked}
          key={item.id}
          onChange={aa}
          onKeyPress={acceptChanges}>
          <input
            type="checkbox"
            className="check"
            id={item.checkId}
            onClick={() => compliteTodo(item)}
          />
          <li className="todo_item">{item.valueofTodo}</li>
          <button className="edt" onClick={editTodo}>
            Edit
          </button>
          <button className="btn" onClick={() => removeTodo(item)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

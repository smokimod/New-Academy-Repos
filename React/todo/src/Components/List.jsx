import React from "react";
import { InputAdd } from "../OtherComponents/InputAdd";
import { useState } from "react";
import { CreateElement } from "./CreateElement";

export const List = () => {
  const [item, setItem] = useState([]);
  const arrayOfTodo = (obj) => {
    setItem((prevValue) => [...prevValue, obj]);
  };

  const removeTodo = (index) => {
    const newTodos = [...item];
    newTodos.splice(index, 1);
    setItem(newTodos);
  };

  const compliteTodo = (id) => {
    item.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
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

  const removeChecked = () => {
    setItem(item.filter((item) => item.checked !== true));
  };

  const compliteWholeTodo = () => {
    const spanOne = document.querySelector(".spanOne");
    let w = item.filter((del) => del.checked === true);
    const oneChange = w.length;
    return (spanOne.textContent = `${oneChange}`);
  };
  
  const progressBar = () => {
    const checkProgress = item.filter((del) => del.checked === true);
    const allItems = item.length;
    const progressLeng = checkProgress.length;
    const myBar = document.querySelector("#myBar");
    myBar.style.width = (progressLeng / allItems) * 100 + "%";
  };
  console.log(item);
  return (
    <div onChange={progressBar}>
      <header className="title">
        <h1>TODOLIST </h1>
      </header>
      <InputAdd arrayOfElements={arrayOfTodo} />
      <div className="remove">
        <button className="remove_btn" onClick={removeChecked}>
          Remove Checked
          <span className="cross_style"></span>
        </button>
      </div>
      <div className="Main_progress">
        <div className="text_progress">
          Coplited Tasks <span className="spanOne"></span> of{" "}
          <span className="spanTwo">{item.length}</span>
        </div>
        <div id="myProgress">
          <div id="myBar"> </div>
        </div>
      </div>
      <div className="todo_container">
        <ul className="todo_list">
          {item.map((point, index) => (
            <CreateElement
              id={point.id}
              key={point.id}
              item={point.item}
              removeTodo={() => removeTodo(index)}
              compliteTodo={compliteTodo}
              editTodo={editTodo}
              acceptChanges={acceptChanges}
              box={compliteWholeTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

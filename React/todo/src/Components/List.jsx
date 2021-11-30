import React from "react";

import { InputAdd } from "../OtherComponents/InputAdd";
import { useState } from "react";
import { CreateElement } from "./CreateElement";

export const List = () => {
  const [item, setItem] = useState([]);
  const arrayOfTodo = (array) => {
    setItem(array);
  };

  return (
    <div>
      <header className="title">
        <h1>TODOLIST </h1>
      </header>
      <InputAdd arrayOfElements={arrayOfTodo} />
      <div className="remove">
        <button className="remove_btn">
          Remove Checked
          {/* <span className="cross_style"></span> */}
        </button>
      </div>
      <div className="Main_progress">
        <div className="text_progress">
          Coplited Tasks <span className="spanOne"></span> of{" "}
          <span className="spanTwo"></span>
        </div>
        <div id="myProgress">
          <div id="myBar"> </div>
        </div>
      </div>

      <div className="todo_container">
        <ul className="todo_list">
          {item.map((point, i) => (
            <CreateElement
              key={Math.random(i)}
              item={point.item}
              id={(Math.random() * 1000).toString}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

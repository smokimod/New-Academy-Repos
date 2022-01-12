import React from "react";
import "./OtherStyles.css";
import { Forma } from "./Forma";
import { AddElement } from "./addElement";
import { Bars } from "./Bars";

export const MainComponent = () => {
  return (
    <div>
      <Forma />
      <Bars />
      <div className="todo_container">
        <ul className="todo_list">
          <AddElement />
        </ul>
      </div>
    </div>
  );
};

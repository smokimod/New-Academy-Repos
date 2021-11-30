import React from "react";

export const CreateElement = (props) => {
  return (
    <div className="todo">
      <input type="checkbox" />
      <li className="todo_item">{props.item}</li>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

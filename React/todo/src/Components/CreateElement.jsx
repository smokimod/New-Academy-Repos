import React from "react";

export const CreateElement = (props) => {
  return (
    <div className="todo" onKeyPress={props.acceptChanges} onChange={props.box}>
      <input
        type="checkbox"
        className="check"
        onClick={() => props.compliteTodo(props.id)}
      />
      <li className="todo_item">{props.item}</li>
      <button onClick={props.editTodo} className='edt'>Edit</button>
      <button onClick={props.removeTodo} className='btn'>Delete</button>
    </div>
  );
};

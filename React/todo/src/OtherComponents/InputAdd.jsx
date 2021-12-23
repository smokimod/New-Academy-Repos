import { useState } from "react";
import "./OtherStyles.css";

export const InputAdd = (props) => {
  const [item, AddItem] = useState("");
  // const [array, setArray] = useState([]);

  const addElement = (e) => {
    AddItem(e.target.value);
  };

  const handleClick = () => {
    if (item.length === 0) {
      return;
    }

    props.arrayOfElements({
      item: item,
      id: (Math.random() * 1000).toString(),
      checked: false,
    });
    AddItem("");
  };

  return (
    <div className="forma">
      <input
        type="text"
        placeholder="Enter the task"
        value={item}
        className="todo_input"
        onChange={addElement}
      />
      <button className="todo_button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

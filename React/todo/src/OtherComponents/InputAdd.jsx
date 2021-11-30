import { useState } from "react";
import "./OtherStyles.css";

export const InputAdd = (props) => {
  const [item, AddItem] = useState("");
  const [array, setArray] = useState([]);

  const addElement = (e) => {
    AddItem(e.target.value);
  };

  const handleClick = () => {
    if (item.length === 0) {
      return;
    }
    setArray([...array, { item: item }]);
    props.arrayOfElements(array);
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

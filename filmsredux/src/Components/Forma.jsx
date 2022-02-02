import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FetchRequest } from "../FetchRequest/FetchRequest";
import { showDetails } from "../Redux/Reducer";

export const Forma = () => {
  const [value, setValue] = useState("");
  const [type, setType] = useState("movie");
  const page = 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showDetails({ type, value }));
  }, [value, type, dispatch]);

  const setValueOfTodo = (e) => {
    setValue(e.target.value);
  };

  const addType = (e) => {
    setType(e.target.value);
  };

  
  return (
    <div className="forma">
      <label htmlFor="title">
        Title:
        <input type="text" name="title" id="title" onChange={setValueOfTodo} />
      </label>
      <label htmlFor="type">
        Type:
        <select name="type" id="type" onChange={addType}>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </label>
      <label htmlFor="sort">
        <span className="name"> Sort By: </span>
        <select name="sort" id="title_two">
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Year">Year</option>
        </select>
      </label>
      <button
        className="button"
        onClick={() => dispatch(FetchRequest(value, type, page))}>
        Search
      </button>
    </div>
  );
};

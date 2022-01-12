import { useDispatch } from "react-redux";
import { delCheck } from "../redux/Reduce/Reduce";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export const Bars = (item) => {
  const array = useSelector((state) => state.array);
  const dispath = useDispatch(item);

  const removeChecked = (item) => {
    dispath(delCheck(item));
  };

  useEffect(() => {
    const checkProgress = array.filter((item) => item.isChecked === true);
    const allItems = array.length;
    const progressLeng = checkProgress.length;
    const myBar = document.querySelector("#myBar");
    myBar.style.width = (progressLeng / allItems) * 100 + "%";
    if (array.length === 0) myBar.style.width = 0 + "%";
  });

  return (
    <>
      <div className="remove">
        <button className="remove_btn" onClick={removeChecked}>
          Remove Checked
          <span className="cross_style"></span>
        </button>
      </div>
      <div className="Main_progress">
        <div className="text_progress">
          Coplited Tasks <span className="spanOne"></span> of {array.length}
          <span className="spanTwo"></span>
        </div>
        <div id="myProgress">
          <div id="myBar"></div>
        </div>
      </div>
    </>
  );
};

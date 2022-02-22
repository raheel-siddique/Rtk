import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./themeSlice";

const Theme = () => {
  const [color, setColor] = useState("white");
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />

      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Change Color
      </button>
    </>
  );
};
export default Theme;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

const CounterRtk = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const themeColor = useSelector((state) => state.themeReducer.color);

  //   const newMyArray = useSelector((state) => state.counterReducer.newArray);

  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(increment(10));
        }}
      >
        +
      </button>
      <input
        type="submit"
        value={count}
        style={{ backgroundColor: themeColor }}
      />
      <button
        onClick={() => {
          dispatch(decrement(10));
        }}
      >
        -
      </button>
      <h1>{themeColor}</h1>
      {/* <input type="text"  /> */}
    </>
  );
};
export default CounterRtk;

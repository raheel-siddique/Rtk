import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

const CounterRtk = () => {
  const count = useSelector((state) => state.counterReducer.count);
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
      <input type="submit" value={count} />
      <button
        onClick={() => {
          dispatch(decrement(10));
        }}
      >
        -
      </button>
      {/* <input type="text"  /> */}
    </>
  );
};
export default CounterRtk;

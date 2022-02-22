import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);
  const incremnetAmount = () => {
    setCount(count + 1);
  };
  const decrmentAmount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <button onClick={incremnetAmount}>+</button>
      <input type="submit" value={count} />
      <button onClick={decrmentAmount}>-</button>
    </>
  );
};
export default Counter;

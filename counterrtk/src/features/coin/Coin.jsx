import React from "react";
import { useSelector } from "react-redux";

const Coin = () => {
  const newMyArray = useSelector((state) => state.counterReducer.newArray);
  const count = useSelector((state) => state.counterReducer.count);

  return (
    <>
      <h1>{count}</h1>
      {/* {newMyArray.map((valuesProduct) => {
        return (
          <>
            <h1>{valuesProduct}</h1>
          </>
        );
      })} */}
    </>
  );
};

export default Coin;

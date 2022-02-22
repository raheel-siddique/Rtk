import React from "react";
import Coin from "./features/coin/Coin";
// import Counter from "./features/counter/Counter";
import CounterRtk from "./features/counter/CounterRtk";

const App = () => {
  return (
    <>
      <CounterRtk />
      <Coin />
    </>
  );
};
export default App;

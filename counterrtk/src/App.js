import React from "react";
import Coin from "./features/coin/Coin";
// import Counter from "./features/counter/Counter";
import CounterRtk from "./features/counter/CounterRtk";
import Theme from "./features/theme/Theme";

const App = () => {
  return (
    <>
      <CounterRtk />
      <Coin />
      <br />
      <Theme />
    </>
  );
};
export default App;

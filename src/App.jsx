import React from "react";
import Timer from "./components/Timer";
import { GlobalStyle } from "./styles/TimerStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Timer />
    </>
  );
};

export default App;

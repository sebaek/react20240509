import React from "react";
import { ArrowComp, MyComp, YourComp } from "./MyComps.jsx";

function App(props) {
  return (
    <div>
      <MyComp />
      <YourComp />
      <ArrowComp />
    </div>
  );
}

export default App;

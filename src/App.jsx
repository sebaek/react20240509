import React from "react";
import { action1, action2, action3, MyComp as YourComp } from "./MyComps.jsx";
import { HerComp } from "./HerComp.jsx";

function App(props) {
  action1();
  action2();
  action3();
  return (
    <div>
      <YourComp />
      <HerComp />
    </div>
  );
}

export default App;

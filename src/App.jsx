import React, { useState } from "react";

function MyComp() {
  const [val, setVal] = useState(0);
  console.log("다시 그려짐");
  return (
    <div>
      <button onClick={() => setVal(0)}>클릭 {val}</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;

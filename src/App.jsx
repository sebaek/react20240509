import React, { useState } from "react";

function MyComp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>UP</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
      <hr />
      <MyComp />
    </div>
  );
}

export default App;

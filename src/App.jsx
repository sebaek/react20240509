import React, { useState } from "react";

function MyBox({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>UP</button>
      <p>{count}</p>
    </div>
  );
}

function App(props) {
  const [display, setDisplay] = useState(true);
  const [count, setCount] = useState(0);
  return (
    <div>
      <input
        type="checkbox"
        checked={display}
        onChange={(e) => setDisplay(e.target.checked)}
      />
      {display && <MyBox count={count} setCount={setCount} />}
    </div>
  );
}

export default App;

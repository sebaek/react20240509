import React, { useState } from "react";

function MyBox() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>UP</button>
      <p>{count}</p>
    </div>
  );
}

function App(props) {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <input
        type="checkbox"
        checked={display}
        onChange={(e) => setDisplay(e.target.checked)}
      />
      {display && <MyBox />}
      {/*
     <div>
      <button>up</button>
      <p>{count}</p>
     </div

     */}
    </div>
  );
}

export default App;

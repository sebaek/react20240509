import React, { useState } from "react";

function MyComp({ color }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: `5px solid ${color}` }}>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>UP</button>
      </div>
    </div>
  );
}

function App(props) {
  const [view1, setView1] = useState(true);
  const [view2, setView2] = useState(true);
  return (
    <div>
      <input
        type={"checkbox"}
        checked={view1}
        onClick={(e) => setView1(e.target.checked)}
      />
      {view1 && <MyComp color={"blue"} />}
      <hr />
      <input
        type={"checkbox"}
        checked={view2}
        onClick={(e) => setView2(e.target.checked)}
      />
      {view2 && <MyComp color={"red"} />}
    </div>
  );
}

export default App;

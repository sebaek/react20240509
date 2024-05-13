import React, { useState } from "react";

function MyCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyCounter />
    </div>
  );
}

export default App;

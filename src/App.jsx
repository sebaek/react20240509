import React, { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>CLICK {count}</button>
    </div>
  );
}

function MyBox() {
  return <div>{3} 번 클릭됨</div>;
}
function App(props) {
  return (
    <div>
      <MyButton />
      <hr />
      <MyBox />
    </div>
  );
}

export default App;

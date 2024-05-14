import React, { useState } from "react";

function MyButton({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>CLICK {count}</button>
    </div>
  );
}

function MyBox({ count }) {
  return <div>{count} 번 클릭됨</div>;
}
function App(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <MyButton count={count} onClick={handleClick} />
      <hr />
      <MyBox count={count} />
    </div>
  );
}

export default App;

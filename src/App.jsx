import React, { useState } from "react";

function MyBox({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>UP</button>
      <p>{count}</p>
    </div>
  );
}
// todo : MyBox 가 tree 에 떨어진 후 다시 붙어도 count 상태가 유지될 수
//  있도록 코드 수정
function App(props) {
  const [display, setDisplay] = useState(true);
  const [count, setCount] = useState(0);

  function handleUpdateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={display}
        onChange={(e) => setDisplay(e.target.checked)}
      />
      {display && <MyBox count={count} onClick={handleUpdateCount} />}
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

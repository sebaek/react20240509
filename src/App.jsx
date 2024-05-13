import React, { useState } from "react";

function MyButton({ onClick }) {
  return <button onClick={onClick}>클릭</button>;
}

function MyNumber({ number }) {
  return <div>number : {number}</div>;
}

function App(props) {
  const [number, setNumber] = useState(0);

  function handleNumberChange() {
    setNumber(number + 1);
  }

  // 하위컴포넌트의 상태와 이벤트를 상위컴포넌트에서 관리할 수 있다.
  // 이 때 props 사용해서 이벤트핸들러메소드와 상태를 전달해 줌.
  return (
    <div>
      <MyButton onClick={handleNumberChange} />
      <MyNumber number={number} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

function MyComp1() {
  const [val, setVal] = useState([]);

  function addItem() {
    val.push("a");
    setVal(val);
  }

  return (
    <div>
      <div>{val}</div>
      <div>
        <button onClick={addItem}>추가</button>
      </div>
    </div>
  );
}

function MyComp2() {
  const [val, setVal] = useState([]);
  function addItem() {
    // 상태가 객체면 새 객체로 복사해서 써야함
    const [...newVal] = val;
    newVal.push("a");
    setVal(newVal);
  }
  return (
    <div>
      <div>{val}</div>
      <div>
        <button onClick={addItem}>추가</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp1 />
      <MyComp2 />
    </div>
  );
}

export default App;

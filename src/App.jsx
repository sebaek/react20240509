import React, { useState } from "react";

const nameList = ["손흥민", "박지성", "이강인", "차범근", "황희찬", "김민재"];

function App(props) {
  const [index, setIndex] = useState(0);
  const i = (nameList.length + index) % nameList.length;
  const name = nameList[i];

  return (
    <div>
      <button onClick={() => setIndex(index - 1)}>이전</button>
      <button onClick={() => setIndex(index + 1)}>다음</button>
      <div>{name}</div>
    </div>
  );
}

export default App;

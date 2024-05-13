import React, { useState } from "react";

function App(props) {
  // input 입력한 값 list에 추가하기
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleClick() {
    if (text.length > 0) {
      const [...nextList] = list;
      nextList.push(text);
      setList(nextList);
      setText("");
    }
  }

  return (
    <div>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>추가</button>
      <ul>
        {list.map((elem) => (
          <li>{elem}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

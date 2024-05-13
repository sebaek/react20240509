import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleClick() {
    const [...nextList] = list;
    nextList.push(text);
    setList(nextList);
    setText("");
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
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

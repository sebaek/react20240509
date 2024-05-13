import React, { useState } from "react";

const foods = ["pizza", "ramen", "coffee", "latte", "burger"];

function App(props) {
  const [index, setIndex] = useState(0);
  const food = foods[index];

  return (
    <div>
      {index > 0 && <button onClick={() => setIndex(index - 1)}>이전</button>}
      {index < foods.length - 1 && (
        <button onClick={() => setIndex(index + 1)}>다음</button>
      )}
      <div>{food}</div>
    </div>
  );
}

export default App;

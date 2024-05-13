import React, { useState } from "react";

function MyNumber() {
  const [number, setNumber] = useState(1000);

  return (
    <div>
      {/*number의 초기값은 1000*/}
      <div>{number}</div>

      <div>
        <button onClick={() => setNumber(number - 1)}>1씩 감소</button>
        <button onClick={() => setNumber(number + 1)}>1씩 증가</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyNumber />
    </div>
  );
}

export default App;

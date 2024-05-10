import React from "react";

function App(props) {
  return (
    <div>
      <MyButton name="샾 출력" onClick={() => console.log("####")} />
      <MyButton name="느낌표 출력" onClick={() => console.log("!!!!!")} />
    </div>
  );
}

export default App;

import React from "react";

function MyNumber() {
  // todo : code 작성
  return (
    <div>
      {/*number의 초기값은 1000*/}
      <div>{number}</div>

      <div>
        <button>1씩 감소</button>
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

import React from "react";

function App(props) {
  // 이름있는 함수
  function action1() {
    console.log("Action 1");
  }
  action1(); // 함수 실행

  // 이름없는 함수
  const action2 = function () {
    console.log("anonymous action ");
  };

  return (
    <div>
      <button onClick={action1}>클릭!</button> <br />
      <button onClick={action2}>클릭@</button> <br />
      <button
        onClick={function () {
          console.log("anonymous action #####");
        }}
      >
        클릭#
      </button>
    </div>
  );
}

export default App;

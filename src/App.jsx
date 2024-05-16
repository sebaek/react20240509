import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    axios.get("/api/main42/sub1").then((param) => console.log(param.data));
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
      <br />
      {/* 버튼이 클릭되면 /api/main42/sub2 get 요청 후
      응답본문을 콘솔에 출력 */}
      <button onClick={handleClick2}>응답 받기</button>
    </div>
  );
}

export default App;

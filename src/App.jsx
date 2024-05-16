import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [result, setResult] = useState("");
  function handleClick1() {
    axios.get("/api/main42/sub1").then((param) => console.log(param.data));
  }

  function handleClick2() {
    axios.get("/api/main42/sub2").then((param) => setResult(param.data));
  }

  function handleClick3() {
    axios.get("/api/main42/sub3").then((res) => console.log(res.data));
  }

  function handleClick4() {
    axios.get("/api/main42/sub4").then((res) => console.log(res.data));
  }

  function handleClick5() {
    axios.get("/api/main42/sub5").then((res) => console.log(res.data));
  }

  function handleClick6() {
    axios.get("/api/main42/sub6").then((res) => console.log(res.data));
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
      <br />
      {/* 버튼이 클릭되면 /api/main42/sub2 get 요청 후
      응답본문을 콘솔에 출력 */}
      <button onClick={handleClick2}>응답 받기</button>
      <br />
      <p>{result}</p>
      <button onClick={handleClick3}>JSON 응답 받기</button>
      <br />
      {/* /api/main42/sub4 get 요청 후
       응답 받은 내용을 콘솔에 출력 */}
      <button onClick={handleClick4}>JSON 응답 받기</button>
      <br />
      <button onClick={handleClick5}>JSON 응답 받기</button>
      <br />
      <button onClick={handleClick6}>JSON 응답 받기</button>
    </div>
  );
}

export default App;

import React from "react";
import axios from "axios";

function App(props) {
  function handleClick200() {
    axios.get("/api/main43/sub1").then((response) => console.log("200응답"));
  }

  function handleClick400() {
    axios
      .get("/api/main43/sub2")
      .then((res) => console.log("400응답"))
      .catch(() => console.log("catch의 메소드, 400응답시"));
  }

  function handleClick404() {
    axios
      .get("/api/main43/sub5")
      .then(() => {})
      .catch(() => console.log("200번 응답 아님!!!!"));
  }
  function handleClick500() {
    axios
      .get("/api/main43/sub6")
      .then(() => {})
      .catch(() => console.log("200번 응답 아님####"));
  }

  return (
    <div>
      <button onClick={handleClick200}>200 응답</button>
      <button onClick={handleClick400}>400 응답</button>
      {/* 아래 응답받은 후 콘솔에 메세지 출력  */}
      <button onClick={handleClick404}>404 응답</button>
      <button onClick={handleClick500}>500 응답</button>
    </div>
  );
}

export default App;

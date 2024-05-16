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

  return (
    <div>
      <button onClick={handleClick200}>200 응답</button>
      <button onClick={handleClick400}>400 응답</button>
      {/* 아래 응답받은 후 콘솔에 메세지 출력  */}
      <button>404 응답</button>
      <button>500 응답</button>
    </div>
  );
}

export default App;

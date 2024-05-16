import React from "react";
import axios from "axios";

function App(props) {
  // json 데이터 타입
  // 문자열, 수, 불리언, 객체, 배열, null

  function handleClick1() {
    const data = {
      name: "son",
      age: 33,
      married: false,
      team: {
        location: "london",
        name: "토트넘",
      },
      item: ["phone", "shoes", "shirts"],
      address: null,
    };
    axios.post("/api/main41/sub5", data);
  }

  return (
    <div>
      <button onClick={handleClick1}>json 데이터와 요청</button>
    </div>
  );
}

export default App;

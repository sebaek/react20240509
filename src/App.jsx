import React from "react";
import axios from "axios";

function App(props) {
  function handleClick() {
    console.log("버튼 클릭됨");
    // get request
    // 첫번째 파라미터 : 요청 경로
    axios.get("/someurl");

    // post request
    // axios.post();
  }

  function handleClick2() {
    const qs = "name=son&age=33&city=서울";
    axios.get("/path?" + qs);
  }

  function handleClick3() {
    const qs = new URLSearchParams();
    qs.append("name", "흥민");
    qs.append("age", "33");
    qs.append("country", "한국");
    axios.get("/path3?" + qs.toString());
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>get 요청</button>
      </div>
      <div>
        <button onClick={handleClick2}>get 요청 with 쿼리스트링</button>
      </div>
      <div>
        <button onClick={handleClick3}>get 요청 with 쿼리스트링</button>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import axios from "axios";

function App(props) {
  function handle200() {
    axios.get("/api/main43/sub1").then((res) => {
      console.log(res);
    });
  }

  function handle400() {
    axios
      .get("/api/main43/sub2")
      .then((res) => {})
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("잘 못된 요청입니다.");
        } else if (err.response.status === 404) {
          console.log("존재하지 않는 요청입니다.");
        } else if (err.response.status === 500) {
          console.log("서버에서 오류가 발생하였습니다.");
        }
      });
  }
  function handle500() {
    axios
      .get("/api/main43/sub6")
      .then((res) => {})
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("잘 못된 요청입니다.");
        } else if (err.response.status === 404) {
          console.log("존재하지 않는 요청입니다.");
        } else if (err.response.status === 500) {
          console.log("서버에서 오류가 발생하였습니다.");
        }
      });
  }

  return (
    <div>
      <button onClick={handle200}>200응답</button>
      <button onClick={handle400}>400응답</button>
      <button onClick={handle500}>500응답</button>
    </div>
  );
}

export default App;

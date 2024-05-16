import React from "react";
import axios from "axios";

function App(props) {
  return (
    <div>
      <button onClick={() => axios.get("/api/main43/sub1")}>200 응답</button>
      <button onClick={() => axios.get("/api/main43/sub2")}>400 응답</button>
      <button onClick={() => axios.get("/api/main43/sub3")}>401 응답</button>
      <button onClick={() => axios.get("/api/main43/sub4")}>403 응답</button>
      <button onClick={() => axios.get("/api/main43/sub5")}>404 응답</button>
      <button onClick={() => axios.get("/api/main43/sub6")}>500 응답</button>
    </div>
  );
}

export default App;

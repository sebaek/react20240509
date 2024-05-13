import React from "react";
// import : 다른 파일에 있는 변수를 현재 파일에서 사용
import { value1, value2, value3, value4 } from "./MyValues.jsx";

function App(props) {
  return (
    <div>
      <div>value1 : {value1}</div>
      <div>value2 : {value2}</div>
      <div>value3 : {value3}</div>
      <div>value4 : {value4.team}</div>
    </div>
  );
}

export default App;

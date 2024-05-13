import React from "react";
// import : 다른 파일에 있는 변수를 현재 파일에서 사용
// 다른 파일의 같은 변수를 import 할 때 as로 다른 별칭을 줄 수 있음
import { value1, value2, value3 as v3, value4 } from "./MyValues.jsx";
import { myAddress, myStr, value3 as vv3 } from "./MyComps.jsx";

function App(props) {
  return (
    <div>
      <div>value1 : {value1}</div>
      <div>value2 : {value2}</div>
      <div>value3 : {vv3}</div>
      <div>v3 : {v3}</div>
      <div>value4 : {value4.team}</div>
      <div>myStr : {myStr}</div>
      <div>myAddress : {myAddress}</div>
    </div>
  );
}

export default App;

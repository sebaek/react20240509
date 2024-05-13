import React from "react";
import { v1, v2 } from "./Values2.jsx";
import { c1, v2 as c2 } from "./Values1.jsx";

// todo : import 코드 작성
//  Value1.jsx, Value2.jsx는 export 코드 작성

function App(props) {
  return (
    <div>
      <div>{v1}</div>
      {/* korea */}
      <div>{v2}</div>
      {/* seoul */}
      <div>{c1}</div>
      {/* usa */}
      <div>{c2}</div>
      {/* ny */}
    </div>
  );
}

export default App;

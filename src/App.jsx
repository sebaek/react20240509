import React from "react";

function App(props) {
  // object : {}
  //  {} 안에 property명 : property값 쌍들이 작성됨
  let a = {};
  let b = { name: "흥민" };
  let c = { address: "신촌", city: "서울", country: "한국" };

  console.log("a", a);
  console.log("b", b);
  console.log("c", c);

  return <div></div>;
}

export default App;

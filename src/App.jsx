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

  console.log("b의 name", b.name);
  console.log("c의 address", c.address);

  console.log("b의 name", b["name"]);
  console.log("c의 address", c["address"]);

  b.name = "강인";
  console.log("b의 name", b.name);

  // 없는 프로퍼티에도 접근 가능
  console.log("b의 city", b.city); // undefined
  b.city = "부산"; // city 프로퍼티 추가됨
  b.address = "강남"; // address 프로퍼티 추가됨

  console.log("b", b);

  return <div></div>;
}

export default App;

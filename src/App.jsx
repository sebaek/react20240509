import React from "react";

function App(props) {
  // object ({}, [])
  // [] : 배열, 원소를 순서대로 저장한 객체
  const a = [6, 7, 8];
  const v1 = a[0];
  const v2 = a[1];
  const v3 = a[2];

  console.log("v1", v1); // 6
  console.log("v2", v2); // 7
  console.log("v3", v3); //8

  const [x, y, z] = a;
  console.log("x", x);
  console.log("y", y);
  console.log("z", z);

  // 연습 :
  const b = ["pizza", 3.14, "lunch"];

  // 적절한 코드 작성
  const [x1, x2, x3] = b;

  console.log("x1", x1); // pizza
  console.log("x2", x2); // 3.14
  console.log("x3", x3); // lunch

  const c = ["son", "lee"];
  const [a1] = c;
  console.log("a1", a1); // son

  const [b1, b2, b3] = c;
  console.log("b3", b3); // undefined

  const [c1, c2 = "park", c3 = "kim"] = c;
  console.log("c1", c1); // son
  console.log("c2", c2); // lee
  console.log("c3", c3); // kim

  // 연습
  const d = ["name", "email", "phone"];
  // 분해할당 코드 작성

  console.log("d1", d1); // name
  console.log("d2", d2); // email
  console.log("d3", d3); // phone
  console.log("d4", d4); // city

  return <div></div>;
}

export default App;

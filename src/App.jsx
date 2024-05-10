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

  console.log("x1", x1); // pizza
  console.log("x2", x2); // 3.14
  console.log("x3", x3); // lunch

  return <div></div>;
}

export default App;

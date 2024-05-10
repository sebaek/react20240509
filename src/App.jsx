import React from "react";

function App(props) {
  // destructuring assignment
  // (구조)분해 할당

  // object({}, [])를 분해해서 할당
  const a = {
    name: "son",
    age: 33,
  };

  const aName = a.name;
  const aAge = a.age;
  // const { name: aName, age: aAge } = a;

  console.log("aName", aName);
  console.log("aAge", aAge);

  const { name: bName, age: bAge } = a;
  // const bName = a.name;
  // const bAge = a.age;

  console.log("bName", bName);
  console.log("bAge", bAge);

  // 오른쪽항 객체의 프로퍼티명과 할당받는 변수명이 같으면 변수명 생략가능
  // const { name: name, age: age } = a;
  const { name, age } = a;
  console.log("name", name);
  console.log("age", age);

  return <div></div>;
}

export default App;

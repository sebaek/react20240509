import React from "react";

function App(props) {
  const a = {
    name: "John",
    age: 44,
    address: {
      street: "Lorem Ipsum",
      city: "seoul",
    },
  };

  // 얕은 복사 (shallow copy)
  const { ...b } = a;
  b.age = 55;
  console.log("b.age", b.age); // 55
  console.log("a.age", a.age); // 44

  b.address.city = "busan";
  console.log("a.address.city", a.address.city); // busan
  console.log("b.address.city", b.address.city); // busan

  // 깊은 복사 (deep copy)
  // 얕은 복사를 여러번 해서 해결
  const { ...c } = a; // 얕은 복사
  const { ...address1 } = a.address; // 얕은 복사
  c.address = address1; // 깊은 복사
  c.address.city = "london";
  console.log("a.address.city", a.address.city); // busan
  console.log("c.address.city", c.address.city); // london

  // 연습; 깊은 복사
  const d = {
    company: {
      name: "apple",
      location: "us",
    },
    name: "iphone",
    price: 300,
  };

  // 코드 작성 : d 객체를 e 객체로 깊은 복사
  const { ...e } = d;
  const { ...company } = d.company;
  e.company = company;

  e.name = "galaxy";
  e.company.name = "samsung";

  console.log("d.name", d.name); // iphone
  console.log("d.company.name", d.company.name); // apple
  console.log("e.name", e.name); // galaxy
  console.log("e.company.name", e.company.name); // samsung

  return <div></div>;
}

export default App;

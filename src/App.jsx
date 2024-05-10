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

  return <div></div>;
}

export default App;

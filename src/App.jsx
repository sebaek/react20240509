import React from "react";

function App(props) {
  const person = {
    email: "test@example.com",
    name: "test",
    address: "gangnam",
    country: "USA",
  };

  // todo: 이 위치에 적절한 코드 작성
  const { email, name, address, country } = person;

  console.log("email", email); // test@example.com
  console.log("name", name); // test
  console.log("address", address); // gangnam
  console.log("country", country); // USA

  return <div></div>;
}

export default App;

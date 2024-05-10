import React from "react";

function App(props) {
  // destructuring assignment
  const person = {
    name: "John",
    email: "john@example.com",
    address: "127.0.0.1",
  };
  const { name, email } = person;
  console.log("name", name);
  console.log("email", email);
  // console.log("address", address);

  const car = {
    model: "genesis",
    company: "hyundai",
    price: 500,
  };
  const { model, company, color } = car;
  console.log("model", model);
  console.log("company", company);
  console.log("color", color); // undefined

  const house = {
    city: "seoul",
    country: "us",
  };
  // 없으면 기본값 할당
  const { city, country = "korea", area = 987 } = house;
  console.log("city", city);
  console.log("country", country); // us
  console.log("area", area); // 987

  return <div></div>;
}

export default App;

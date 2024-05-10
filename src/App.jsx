import React from "react";

function MyElem(props) {
  console.log(props); // {name: "son", age: 33}

  const { name, age } = props;
  console.log("name", name); // son
  console.log("age", age); // 33

  return <div></div>;
}

function MyComp({ city, country, price }) {
  // props : {city: "seoul", country:"korea", price: 500}
  console.log("city", city);
  console.log("country", country);
  console.log("price", price);

  return <div></div>;
}

function App(props) {
  return (
    <div>
      <MyElem name="son" age={33} />
      <MyComp city="seoul" country="korea" price={500} />
    </div>
  );
}

export default App;

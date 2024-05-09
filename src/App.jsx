import React from "react";

function App(props) {
  // object
  const a = {
    name: "John",
  };

  const b = a;

  console.log(a === b); // true

  console.log("a.name", a.name); // John
  console.log("b.name", b.name); // John

  b.name = "Jane";
  console.log(a === b); // true

  console.log("a.name", a.name); // John
  console.log("b.name", b.name); // Jane

  return <div></div>;
}

export default App;

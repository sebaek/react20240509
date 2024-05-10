import React from "react";

function MyComp({ headColor, bodyColor }) {
  return (
    <div>
      <h1 style={{ color: headColor }}>Lorem.</h1>
      <p style={{ color: bodyColor }}>Lorem ipsum dolor.</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp headColor={"skyblue"} bodyColor={"gold"} />
      <MyComp headColor={"gray"} bodyColor={"linen"} />
    </div>
  );
}

export default App;

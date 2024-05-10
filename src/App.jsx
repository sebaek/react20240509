import React from "react";

function MyComp({ headStyle, bodyStyle }) {
  return (
    <div>
      <h1 style={headStyle}>Lorem.</h1>
      <p style={bodyStyle}>Lorem ipsum dolor.</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp
        headStyle={{
          padding: "5px",
          border: "1px solid lightgray",
          color: "blue",
        }}
        bodyStyle={{
          margin: "5px",
          border: "1px dotted skyblue",
          color: "red",
          textAlign: "center",
        }}
      />
    </div>
  );
}

export default App;

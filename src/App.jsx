import React from "react";

function MyComp({ color }) {
  return (
    <div style={{ color: color }}>
      {/*h1>lorem1^p>lorem3*/}
      <h1>Lorem.</h1>
      <p>Lorem ipsum dolor.</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      {/* red color */}
      <MyComp color="red" />
      {/* blue color */}
      <MyComp color="blue" />
    </div>
  );
}

export default App;

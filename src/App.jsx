import React from "react";

function MyButton({ children }) {
  return <button>{children}</button>;
}

function App(props) {
  return (
    <div>
      <MyButton>클릭1</MyButton>
      {/* <button>클릭1</button> */}
      <MyButton>클릭2</MyButton>
      {/* <button>클릭2</button> */}
    </div>
  );
}

export default App;

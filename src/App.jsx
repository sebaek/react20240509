import React from "react";

// todo : MyButton 컴포넌트 만들기

function MyButton({ name = "클릭" }) {
  return <button>{name}</button>;
}

function App(props) {
  return (
    <div>
      <MyButton name="버튼1" />
      {/* <button>버튼1</button> */}
      <MyButton />
      {/* <button>클릭</button> */}
    </div>
  );
}

export default App;

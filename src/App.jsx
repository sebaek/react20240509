import React from "react";

function MyButton({ name, sx }) {
  return <button style={sx}>{name}</button>;
}

function App(props) {
  return (
    <div>
      {/*  두 개의 MyButton 컴포넌트를 사용 sx, name는 여러분 취향껏 작성 */}
      <MyButton
        name={"red button"}
        sx={{
          backgroundColor: "red",
          color: "white",
          padding: "10px",
        }}
      ></MyButton>
      <MyButton
        name={"blue button"}
        sx={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
        }}
      ></MyButton>
    </div>
  );
}

export default App;

import React from "react";

function MyComp(props) {
  console.log(props);
  return (
    <div>
      <p>name : {props.name}</p>
      <p>age : {props.age}</p>
      <p>address : {props.address}</p>
      <p>city : {props.city}</p>
      <p>country : {props.country}</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp name="son" age={33} address="seoul" />
      <MyComp city="busan" country="USA" />
    </div>
  );
}

export default App;

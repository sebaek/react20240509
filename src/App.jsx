import React from "react";

function MyComp({ name, age, team = "무소속" }) {
  return (
    <div>
      <ul>
        <li>이름 : {name}</li>
        <li>나이 : {age}</li>
        <li>팀 : {team}</li>
      </ul>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp name="흥민" age={33} team="토트넘" />
      <MyComp name="강인" age={22} team="파리" />
      <MyComp name="길동" age={44} />
    </div>
  );
}

export default App;

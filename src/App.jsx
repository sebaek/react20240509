import React from "react";

// todo : MyInfo 컴포넌트 만들기

function App(props) {
  return (
    <div>
      <MyInfo name="흥민" team="토트넘" salary={500} country="korea" />
      {/*<div>*/}
      {/*  <ul>*/}
      {/*    <li>이름 : 흥민</li>*/}
      {/*    <li>팀 : 토트넘</li>*/}
      {/*    <li>연봉 : 500</li>*/}
      {/*    <li>국가 : korea</li>*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>
  );
}

export default App;

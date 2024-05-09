import React from "react";

function App(props) {
  // string
  const s1 = "some string";
  const s2 = "other string";
  const s3 = "I'm 신뢰에요";
  const s4 = '제 이름은 "흥민"입니다.';

  // backtick
  // template literal
  const s5 = `another string`;

  const name = "son";
  const age = 30;

  const s6 = name + " is " + age * 2 + " years.";
  const s7 = `${name} is ${age * 2} years.`;

  return (
    <div>
      <p>{s6}</p>
      <p>{s7}</p>
    </div>
  );
}

export default App;

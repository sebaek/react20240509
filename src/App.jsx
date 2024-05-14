import React, { createContext, useContext, useState } from "react";

// step1 : create the context
const MessageContext = createContext("");

function MyBox() {
  // step2 : use the context
  const message = useContext(MessageContext);

  return <div>{message}</div>;
}

function MySection() {
  return <MyBox />;
}

function MyContainer() {
  return <MySection />;
}

// context
// https://react.dev/learn/passing-data-deeply-with-context
// # context 과용하지 말 것
// 1. prop 전달 부터 시작할 것
// 2. 주로 theme, 현재 계정정보, routing 등에 사용됨

function App(props) {
  const [message, setMessage] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <p>{message}</p>
      <hr />
      {/* step3 : provide the context */}
      <MessageContext.Provider value={message}>
        <MyContainer />
      </MessageContext.Provider>
    </div>
  );
}

export default App;

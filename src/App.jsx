import React, { createContext, useContext, useState } from "react";

// step1 : 콘텍스트 만들기
const MessageContext = createContext(null);

function MyBox() {
  // step2 : 콘텍스트 사용하기
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
function App(props) {
  const [message, setMessage] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <p>{message}</p>
      <hr />
      {/* step3 : 컨텍스트 제공하기 */}
      <MessageContext.Provider value={message}>
        <MyContainer />
      </MessageContext.Provider>
    </div>
  );
}

export default App;

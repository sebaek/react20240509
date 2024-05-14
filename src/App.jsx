import React, { createContext, useContext, useState } from "react";
// step1 : 컨텍스트 만들기
const MessageContext = createContext(null);

function MyInput() {
  // step2 : 컨텍스트 사용하기
  const message = useContext(MessageContext);
  return (
    <div>
      <input
        type="text"
        value={message.text}
        onChange={(e) => message.updateText(e.target.value)}
      />
      <p>{message.text}</p>
    </div>
  );
}

function MyText() {
  // step2 : 컨텍스트 사용하기
  const text = useContext(MessageContext);
  return (
    <div>
      <p>{text.text}</p>
    </div>
  );
}

function App(props) {
  const [text, setText] = useState("");

  function handleUpdateText(t) {
    setText(t);
  }

  return (
    <div>
      {/* step3 : 컨텍스트 제공 */}
      <MessageContext.Provider value={{ text, updateText: handleUpdateText }}>
        <MyInput />
        <MyText />
      </MessageContext.Provider>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function MyBox({ message }) {
  return <div>{message}</div>;
}

function MySection({ message }) {
  return <MyBox message={message} />;
}

function MyContainer({ message }) {
  return <MySection message={message} />;
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
      <MyContainer message={message} />
    </div>
  );
}

export default App;

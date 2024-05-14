import React, { useState } from "react";

function MyBox() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyBox />
      <hr />
      <MyBox />
      {/*
     <div>
       <input />
       <p></p>
     </div>
     <hr />
     <div>
       <input />
       <p></p>
     </div>

     */}
    </div>
  );
}

export default App;

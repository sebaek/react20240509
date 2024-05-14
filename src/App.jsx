import React from "react";

function App(props) {
  return (
    <div>
      <div>
        <button onClick={handleClick1}>/path1 get 요청</button>
      </div>
      <div>
        <button onClick={handleClick2}>
          /path2 get 요청, city, address 요청 파라미터 첨부
        </button>
      </div>
      <div>
        <button onClick={handleClick3}>
          /path3 get 요청, name, age 요청 파라미터가 첨부
        </button>
      </div>
    </div>
  );
}

export default App;

import React from "react";

function App(props) {
  // a 클릭 시
  // form 서브밋 시

  function handleClick(e) {
    e.preventDefault();
    console.log("다른 일...");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("서브밋 대신 다른 일...");
  }

  // 기본 동작 막고,, 콘솔에 간단한 메세지 출력
  return (
    <div>
      <a onClick={handleClick} href="https://www.google.com">
        구글
      </a>
      <hr />
      <form onSubmit={handleSubmit} action="https://www.google.com">
        <input type="text" />
        <button>전송</button>
      </form>
    </div>
  );
}

export default App;

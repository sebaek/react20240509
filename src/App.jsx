import React from "react";

function App(props) {
  return (
    <div>
      {/*button{click$}*5*/}
      {/* 각 버튼을 클릭하면 콘솔에 메세지 출력 */}

      <button>click1 onClick property에 이름있는 함수 넣기</button>
      <button>
        click2 onClick property에 이름없는 함수 변수에 담아서 넣기
      </button>
      <button>click3 onClick property에 이름없는 함수 바로 넣기</button>
      <button>
        click4 onClick property에 arrow function 변수에 담아서 넣기
      </button>
      <button>click5 onClick property에 arrow function 바로 넣기</button>
    </div>
  );
}

export default App;

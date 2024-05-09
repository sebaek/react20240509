import React from "react";

function App(props) {
  const obj = {
    age: 30,
    name: "John Doe",
    email: "john@example.com",
    password: "1234567890",
  };
  return (
    <div>
      {/* obj의 각 프로퍼티를 jsx 내에서 출력하는 코드 작성 */}
      <ul>
        <li>age : {obj.age}</li>
        <li>name : {obj.name}</li>
        <li>email : {obj.email}</li>
        <li>pw : {obj.password}</li>
      </ul>
    </div>
  );
}

export default App;

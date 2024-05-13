import React from "react";

function App(props) {
  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="text" />
      </div>

      <ul>
        <li>이름 : {car.name}</li>
        <li>모델 : {car.model}</li>
        <li>회사 : {car.company}</li>
        <li>가격 : {car.price}</li>
      </ul>
    </div>
  );
}

export default App;

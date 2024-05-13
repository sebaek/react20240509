import React, { useState } from "react";

function App(props) {
  const [car, setCar] = useState({
    name: "",
    model: "",
    price: 0,
    company: "",
  });
  function handleChange(e) {
    const { ...nextCar } = car;
    nextCar[e.target.name] = e.target.value;
    setCar(nextCar);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder={"이름"}
          name={"name"}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"모델"}
          name={"model"}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"회사"}
          name={"company"}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder={"가격"}
          name={"price"}
          onChange={handleChange}
        />
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

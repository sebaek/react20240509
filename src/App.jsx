import React, { useState } from "react";

function App(props) {
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <input type="text" onChange={(e) => setHobby(e.target.value)} />
      </div>
      <div>
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <input type="text" onChange={(e) => setCity(e.target.value)} />
      </div>

      <div>
        {name}, {hobby}, {address}, {city}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function App(props) {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [team, setTeam] = useState("");

  // 필요시 여러 state 사용 가능

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          placeholder={"나이"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          placeholder={"국가"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setTeam(e.target.value)}
          placeholder={"팀"}
        />
      </div>

      <div>
        {age}세 {name}은 {country}, {team} 소속입니다.
      </div>
    </div>
  );
}

export default App;

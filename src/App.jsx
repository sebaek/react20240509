import React, { useState } from "react";

function App(props) {
  const [person, setPerson] = useState({
    name: "",
    address: "",
    city: "",
    email: "",
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder={"이름"}
          onChange={(e) => {
            const { ...nextPerson } = person;
            nextPerson.name = e.target.value;
            setPerson(nextPerson);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"이메일"}
          onChange={(e) => {
            const { ...nextPerson } = person;
            nextPerson.email = e.target.value;
            setPerson(nextPerson);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"도시"}
          onChange={(e) => {
            const nextPerson = { ...person, city: e.target.value };
            setPerson(nextPerson);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={"주소"}
          onChange={(e) => {
            setPerson({ ...person, address: e.target.value });
          }}
        />
      </div>
      <ul>
        <li>name: {person.name}</li>
        <li>email: {person.email}</li>
        <li>city: {person.city}</li>
        <li>address: {person.address}</li>
      </ul>
    </div>
  );
}

export default App;

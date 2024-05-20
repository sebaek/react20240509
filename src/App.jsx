import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    axios.postForm("/api/main45/sub1", {
      name: name,
      file: file,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        이름{" "}
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;

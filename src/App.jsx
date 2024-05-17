import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [username, setUsername] = useState("son");
  const [scope, setScope] = useState("admin manager");

  function handleLogin() {
    axios.post("/api/main44/login", { username, scope }).then((res) => {
      localStorage.setItem("token", res.data);
    });
  }

  function handleLogout() {
    localStorage.removeItem("token");
  }

  function handleAccessAll() {
    axios.get("/api/main44/all").then((res) => alert(res.data));
  }

  function handleAccessUser() {
    axios
      .get("/api/main44/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => alert(res.data));
  }

  function handleAccessAdmin() {
    axios
      .get("/api/main44/admin", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => alert(res.data));
  }

  function handleAccessManager() {
    axios
      .get("/api/main44/manager", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => alert(res.data));
  }

  function handleAccessManagerOrAdmin() {
    axios
      .get("/api/main44/ma", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => alert(res.data));
  }

  return (
    <div>
      <div>
        <input
          type="text"
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          defaultValue={scope}
          onChange={(e) => setScope(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>로그인</button>
      </div>

      <hr />
      <button onClick={handleLogout}>로그아웃</button>
      <hr />
      <button onClick={handleAccessAll}>누구나</button>
      <hr />
      <button onClick={handleAccessUser}>로그인한 유저만</button>
      <hr />
      <button onClick={handleAccessAdmin}>어드민 경로</button>
      <hr />
      <button onClick={handleAccessManager}>매니져 경로</button>
      <hr />
      <button onClick={handleAccessManagerOrAdmin}>매니져/어드민 경로</button>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mount 될 때");
  }, []);

  useEffect(() => {
    console.log("count가 변경 될 때");
    // dependency 가 변경되지 않도록 주의
    // setCount(count + 1);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default App;

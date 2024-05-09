function App() {
  const name = "강인";
  const age = 5; // or 30;

  return (
    <div>
      <p>{name}</p>
      {name === "흥민" && <p>공격수</p>}
      {name === "강인" && <p>미드필더</p>}

      {/*
        age 가 20 보다 크거나 같으면
        <p> 투표 가능 </p>
        age 가 20 보다 작으면
        <p> 투표 불가능 </p>
     */}
      {age >= 20 && <p>투표 가능</p>}
      {age < 20 && <p> 투표 불가능</p>}

      {age < 20 || <p>투표 가능</p>}
      {age >= 20 || <p> 투표 불가능</p>}
    </div>
  );
}

export default App;

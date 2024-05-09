// todo : 이 위치에 MyTag, MyContent 컴포넌트 만들기
function MyTag() {
  return <h3> hello component</h3>;
}

function MyContent() {
  return <p> my content </p>;
}

function App() {
  return (
    <>
      <div>
        <h1>hello react</h1>
        <h1>hello react</h1>
        <MyTag />
        <MyTag />
        {/* <h3> hello component </h3>*/}
        <MyContent />
        <MyContent />
        {/* <p> my content </p> */}
      </div>
    </>
  );
}

export default App;

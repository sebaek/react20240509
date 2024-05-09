function App() {
  // javascript review

  // javascript data type
  let a; // 값이 할당되지 않으면 undefined
  console.log("a", typeof a);
  let b = "문자열 타입"; // string
  console.log("b", typeof b);
  let c = 3; // number
  console.log("c", typeof c);
  let d = 3.14; // number
  console.log("d", typeof d);
  let e = true; // boolean
  console.log("e", typeof e);

  let f = {}; // object
  console.log("f", typeof f);

  let g = function () {}; // function
  console.log("g", typeof g);
  g = {};
  console.log("g", typeof g);

  return <div></div>;
}

export default App;

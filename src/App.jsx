import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// /about
// /search
// /home
// 위 경로에 다른 컴포넌트가 출력되도록 작성
const route = createBrowserRouter([
  { path: "about", element: <div>about page</div> },
  { path: "search", element: <div>search page</div> },
  { path: "home", element: <div>home page</div> },
]);

function App(props) {
  return <RouterProvider router={route} />;
}

export default App;

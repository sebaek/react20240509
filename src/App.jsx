import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// /about
// /search
// /home
// /spring/framework
// /spring/doc
// /spring/learn

// 위 경로에 다른 컴포넌트가 출력되도록 작성
const route = createBrowserRouter([
  { path: "about", element: <div>about page</div> },
  { path: "search", element: <div>search page</div> },
  { path: "home", element: <div>home page</div> },
  {
    path: "spring",
    children: [
      { path: "framework", element: <div>spring framework</div> },
      { path: "doc", element: <div>spring doc</div> },
      { path: "learn", element: <div>spring learn</div> },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={route} />;
}

export default App;

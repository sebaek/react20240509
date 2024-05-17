import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// router 객체
const router = createBrowserRouter([
  {
    path: "/add",
    element: <div>글 작성 페이지</div>,
  },
  {
    path: "/edit",
    element: <div>게시물 수정 페이지</div>,
  },
  {
    path: "/list",
    element: <div>게시물 목록 페이지</div>,
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;

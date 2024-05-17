import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";

function Root() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function BoardList() {
  return (
    <div>
      <div>
        <Link to="/board?id=1">1번 게시물 보기</Link>
      </div>
      <div>
        <Link to="/board?id=2">2번 게시물 보기</Link>
      </div>
      <div>
        <Link to="/board?id=3">3번 게시물 보기</Link>
      </div>
    </div>
  );
}

function BoardView() {
  // /board?id=3
  // query string 읽기
  const [params] = useSearchParams();

  return <div>{params.get("id")}번 게시물 보기</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <div>MAIN PAGE</div>,
      },
      {
        path: "board",
        element: <BoardView />,
      },
      {
        path: "list",
        element: <BoardList />,
      },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;

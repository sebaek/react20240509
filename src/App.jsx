import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useNavigate,
  useParams,
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
  // Link(a) 가 아닌 컴포넌트/element 클릭 시 이동하는 방법
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/board/1")}>
        1번 게시물 보기
      </div>
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/board/2")}>
        2번 게시물 보기
      </div>
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/board/3")}>
        3번 게시물 보기
      </div>
    </div>
  );
}

function BoardView() {
  const params = useParams();
  return <div>{params.id} 번 게시물</div>;
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
        path: "board/:id",
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

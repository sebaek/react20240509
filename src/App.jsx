import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function SpringRoot() {
  return (
    <div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#eee",
          display: "flex",
          gap: "5px",
        }}
      >
        <div>
          {/* a 태그 대신 Link 컴포넌트 사용하기 */}
          <Link to="/spring/learn">LEARN</Link>
        </div>
        <div>
          <Link to="/spring/api">API</Link>
        </div>
        <div>
          <Link to="/spring/doc">DOC</Link>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "spring",
    element: <SpringRoot />,
    children: [
      { path: "api", element: <div>api page</div> },
      { path: "doc", element: <div>doc page</div> },
      { path: "learn", element: <div>learn page</div> },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;

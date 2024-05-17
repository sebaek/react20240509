import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

// /react/doc
// /react/tutorial
// /react/sample

function ReactHome() {
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <div
        style={{
          padding: "10px",
          backgroundColor: "linen",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div>
          <Link to="/react/doc">DOC</Link>
        </div>
        <div>
          <Link to="/react/tutorial">TUTORIAL</Link>
        </div>
        <div>
          <Link to="/react/sample">SAMPLE</Link>
        </div>
      </div>
      <div style={{ flex: "1" }}>
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/react",
    element: <ReactHome />,
    children: [
      { path: "doc", element: <div>REACT DOC PAGE</div> },
      { path: "tutorial", element: <div>REACT TUTORIAL PAGE</div> },
      { path: "sample", element: <div>REACT SAMPLE</div> },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;

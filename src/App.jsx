import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "spring",
    element: (
      <div>
        spring root page
        <Outlet />
      </div>
    ),
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
